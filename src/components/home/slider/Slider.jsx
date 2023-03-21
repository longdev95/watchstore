import React, { useState } from "react";
import styles from "./Slider.module.scss";

import { dataCarousel } from "../../../dataCarousel";
import Arrow from "../../../helper/Arrow";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const dataLength = dataCarousel.length;

  const nextCarousel = () => {
    slideIndex === dataLength
      ? setSlideIndex(1)
      : setSlideIndex((prev) => prev + 1);
  };

  const prevCarousel = () => {
    slideIndex === 1
      ? setSlideIndex(dataLength)
      : setSlideIndex((prev) => prev - 1);
  };

  return (
    <section className={styles.carousels}>
      {dataCarousel.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={`${
              slideIndex === index + 1
                ? `${styles[`carousel`]} ${styles[`active`]}`
                : `${styles[`carousel`]}`
            }`}
          >
            <img src={`/src/assets/slider/slide-bg-${index + 1}.jpg`} />

            <div className={styles[`carousel-content`]}>
              <h1>{obj.title}</h1>
              <p>{obj.description}</p>
            </div>
          </div>
        );
      })}

      <Arrow direction={"left"} moveSlide={prevCarousel} />
      <Arrow direction={"right"} moveSlide={nextCarousel} />
    </section>
  );
}
export default Slider;
