import React from "react";
import Card from "../../../helper/Card";
import styles from "./Trend.module.scss";

function Trend() {
  return (
    <Card>
      <section className={styles[`trend-container`]}>
        <div className={styles[`trend`]}>
          <div className={`${styles[`trend-img`]} group`}>
            <div
              className={`bg-[url('/src/assets/trend/trend-1.jpg')] group-hover:scale-110 duration-700
              ${styles[`trend-img-bg`]}`}
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
              className={`bg-[url('/src/assets/trend/trend-2.jpg')] group-hover:scale-110 duration-700
              ${styles[`trend-img-bg`]}`}
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
