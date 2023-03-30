import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./BestSellerItem.module.scss";

const BestSellerItem = ({ item }) => {
  return (
    <div className={`${styles[`wrapper-item`]} group`}>
      <div className={styles[`item`]}>
        <div className={styles.item}>
          <img src={item.path} alt="best-seller-img" />
        </div>
        <div className={styles.content}>
          <h1>{item.name}</h1>
          <span>{item.price}</span>
          <button>Add to Cart</button>
        </div>
        <button className={`${styles[`favorite`]} group-hover:opacity-100`}>
          <FontAwesomeIcon icon="fa-solid fa-heart" size="lg" />
        </button>
      </div>
    </div>
  );
};

export default BestSellerItem;
