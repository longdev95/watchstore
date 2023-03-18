import React from "react";
import { Wrapper } from "./Wrapper";
import styles from "./HomeTop.module.scss";

const HomeTop = () => {
    return (
        <Wrapper>
            <div className={styles[`hometop`]}>
                <div className={styles[`hometop-contact`]}>
                    <div className={styles[`hometop-contact-address`]}>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>
                            1234 Quang Trung, Phuong 8, Quan Go Vap, TPHCM
                        </span>
                    </div>
                    <div className={styles[`hometop-contact-phone`]}>
                        <i class="fa-solid fa-phone"></i>
                        <span>0966260395</span>
                    </div>
                </div>
                <div className={styles[`hometop-social`]}>
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
        </Wrapper>
    );
};

export default HomeTop;
