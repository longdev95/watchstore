import React from "react";

function Card(props) {
  return (
    <div className="bg-white max-w-[1200px] mt-[60px] px-[15px] mx-auto ">
      {props.children}
    </div>
  );
}

export default Card;
