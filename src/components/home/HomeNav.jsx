import React from "react";
import styles from "./HomeNav.module.scss";
import { Wrapper } from "./Wrapper";

function HomeNav() {
    return (
        <Wrapper>
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
        </Wrapper>
    );
}

export default HomeNav;
