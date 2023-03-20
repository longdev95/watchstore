import React from "react";
import styles from "./HeaderTop.module.scss";

const HeaderTop = () => {
    return (
        <div className="bg-second-color ">
            <div className={styles[`top`]}>
                <div className={styles[`top-contact`]}>
                    <div className={styles[`top-contact-address`]}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>
                            1234 Quang Trung, Phuong 8, Quan Go Vap, TPHCM
                        </span>
                    </div>
                    <div className={styles[`top-contact-phone`]}>
                        <i className="fa-solid fa-phone"></i>
                        <span>0966260395</span>
                    </div>
                </div>
                <div className={styles[`top-social`]}>
                    <a href="">
                        <i className={`fa-brands fa-facebook fa-lg`}></i>
                    </a>
                    <a href="">
                        <i className={`fa-brands fa-instagram fa-lg`}></i>
                    </a>
                    <a href="">
                        <i className={`fa-brands fa-twitter fa-lg`}></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
