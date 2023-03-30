import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import classes from "./Carousel.module.scss";

const Carousel = (props) => {
  const { children, show } = props;

  console.log("show:", show);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  console.log("currentIndex", currentIndex);
  console.log("length", length);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) return;

    const currentPosition = e.touches[0].clientX;
    const diff = currentPosition - touchDown;

    if (diff > 20) prev();
    if (diff < -20) next();

    setTouchPosition(null);
  };

  return (
    <div className={classes[`carousel-container`]}>
      <div className={classes[`carousel-wrapper`]}>
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className={`${classes.arrow} ${classes[`arrow-left`]}`}
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </button>
        )}

        <div
          className={classes[`carousel-content-wrapper`]}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`${classes["carousel-content"]} ${
              classes[`show-${show}`]
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>

        {currentIndex < length - 1 && (
          <button
            onClick={next}
            className={`${classes.arrow} ${classes[`arrow-right`]}`}
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
