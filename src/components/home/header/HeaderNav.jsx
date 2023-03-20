import React from "react";
import styles from "./HeaderNav.module.scss";

function HeaderNav() {
    return (
        <div className="bg-second-color">
            <div className={styles[`nav`]}>
                <ul className={styles[`nav-list`]}>
                    <li>
                        <a href="">HOME</a>
                    </li>
                    <li>
                        <a href="">INTRODUCE</a>
                    </li>
                    <li>
                        <a href="">MEN WATCH</a>
                    </li>
                    <li>
                        <a href="">WOMAN WATCH</a>
                    </li>
                    <li>
                        <a href="">BLOGS</a>
                    </li>
                    <li>
                        <a href="">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNav;
