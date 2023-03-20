import React from "react";
import styles from "./HeaderMain.module.scss";
import brandLogo from "../../../assets/brand-logo.png";

function HeaderMain() {
    const submitSearchHandler = (event) => {
        alert("Hello bae! You just click search button. Nothing here hahaha");
    };
    return (
        <div className="bg-second-color border-y-[1px] border-[#ffffff1a]">
            <div className={styles[`main`]}>
                <div className={styles[`main-bars`]}>
                    <a href="">
                        <i className="fa-solid fa-bars"></i>
                    </a>
                </div>
                <div className={styles[`main-logo`]}>
                    <img src={brandLogo} alt="shop-logo" />
                </div>
                <div className={styles[`main-search`]}>
                    <form action="" className={styles[`main-search-form`]}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                        />
                        <button
                            className={styles[`main-search-form-button`]}
                            onClick={submitSearchHandler}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                <div className={styles[`main-info`]}>
                    <a href="">
                        <span>ĐĂNG NHẬP</span>
                    </a>
                    <i
                        className={`fa-solid fa-heart fa-lg ${
                            styles[`main-info-heart`]
                        }`}
                    ></i>
                    <div className={styles[`main-info-cart`]}>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;
