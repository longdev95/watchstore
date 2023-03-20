import React from "react";
import styles from "./SliderItem.module.scss";

function SliderItem(item) {
    return (
        <div>
            <div className={styles[`background-slider`]}></div>
            <div className={styles[`textbox`]}>
                <h3>{item.title}</h3>
                <p>{item.desciption}</p>
            </div>
            <button type="submit">View product</button>
        </div>
    );
}

export default SliderItem;
