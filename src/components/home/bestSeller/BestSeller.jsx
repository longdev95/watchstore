import React from "react";
import Card from "../../../helper/Card";
import BestSellerItem from "./BestSellerItem";
import styles from "./BestSeller.module.scss";

import { bestSellerData } from "../../../data";
import Carousel from "../../Carousel/Carousel";

const BestSeller = () => {
  return (
    <Card>
      <div className={styles.title}>
        <h1>Best Seller in month</h1>
      </div>
      <Carousel show={4}>
        {bestSellerData.map((item) => {
          return <BestSellerItem key={item.id} item={item} />;
        })}
      </Carousel>
    </Card>
  );
};

export default BestSeller;
