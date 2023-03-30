import React from "react";
import Card from "../../../helper/Card";
import styles from "./Trend.module.scss";

function Trend(props) {
  console.log("Trend is rendering");

  const img = props.img;

  const imagePath1 = `src/assets/trend/trend-${img[0]}.jpg`;
  const imagePath2 = `src/assets/trend/trend-${img[1]}.jpg`;

  const classImage01 = `bg-[url(src/assets/trend/trend-${img[0]}.jpg)]`;
  const classImage02 = `bg-[url(${imagePath2})]`;

  return (
    <Card>
      <section className={styles[`trend-container`]}>
        <div className={styles[`trend`]}>
          <div className={`${styles[`trend-img`]} group`}>
            <div
              className={`group-hover:scale-110 duration-700
              ${styles[`trend-img-bg`]}
              ${classImage01}`}
            ></div>
          </div>
          <div className={styles[`trend-content`]}>
            <div className={styles[`trend-content-title`]}>Xu huong 2023</div>
            <div className={styles[`trend-content-description`]}>Men Watch</div>
          </div>
        </div>

        <div className={styles[`trend`]}>
          <div className={`${styles[`trend-img`]} group`}>
            <div
              className={`group-hover:scale-110 duration-700
              ${styles[`trend-img-bg`]}
              ${classImage02}`}
            ></div>
          </div>
          <div className={styles[`trend-content`]}>
            <div className={styles[`trend-content-title`]}>Xu huong 2023</div>
            <div className={styles[`trend-content-description`]}>
              Women Watch
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
}

export default Trend;
