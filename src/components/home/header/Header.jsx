import React from "react";
import HeaderMain from "./HeaderMain";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <div className="sticky top-0 h-[100px] tablet:h-[200px] desktop:h-[200px] w-[100%] z-10">
      <HeaderTop />
      <HeaderMain />
      <HeaderNav />
    </div>
  );
}

export default Header;
