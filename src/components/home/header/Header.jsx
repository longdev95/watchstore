import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <div className="relative top-0 max-h-[200px]">
      <HeaderTop />
      <HeaderMain />
      <HeaderNav />
    </div>
  );
}

export default Header;
