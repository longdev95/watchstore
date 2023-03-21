import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Arrow({ direction, moveSlide }) {
  return (
    <button
      onClick={() => moveSlide()}
      className={`border border-gray-300 rounded-[50%] h-12 w-12 translate-y-[-50%] flex items-center justify-center absolute top-[50%] hover:translate-x-4 hover:duration-300 ${
        direction === "left"
          ? "left-[50px] hover:-translate-x-4 ease-linear"
          : "right-[50px] hover:translate-x-4 ease-linear"
      }`}
    >
      <FontAwesomeIcon
        icon={`fa-solid fa-chevron-${direction}`}
        style={{ color: "#f1f1f1" }}
      />
    </button>
  );
}

export default Arrow;
