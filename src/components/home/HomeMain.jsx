import React from "react";
import styles from "./HomeMain.module.scss";
import { Wrapper } from "./Wrapper";
import brandLogo from "../../assets/brand-logo.png";

function HomeMain() {
    return (
        <Wrapper>
            <div className={styles[`homemain`]}>
                <div className={styles[`homemain-bars`]}>
                    <a href="">
                        <i class="fa-solid fa-bars"></i>
                    </a>
                </div>
                <div className={styles[`homemain-logo`]}>
                    <img src={brandLogo} alt="shop-logo" />
                </div>
                <div className={styles[`homemain-search`]}>
                    <form action="" className={styles[`homemain-search-form`]}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                        />
                        <div className={styles[`homemain-search-form-button`]}>
                            <a href="#">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </div>
                    </form>
                </div>
                <div className={styles[`homemain-info`]}>
                    <a href="">
                        <span>ĐĂNG NHẬP</span>
                    </a>
                    <i
                        className={`fa-solid fa-heart fa-lg ${
                            styles[`homemain-info-heart`]
                        }`}
                    ></i>
                    <div className={styles[`homemain-info-cart`]}>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default HomeMain;
