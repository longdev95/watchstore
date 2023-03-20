import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

function Header() {
    return (
        <React.Fragment>
            <HeaderTop />
            <HeaderMain />
            <HeaderNav />
        </React.Fragment>
    );
}

export default Header;
