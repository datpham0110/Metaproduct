import React from "react";
import leftArrow from "../../../../images/left-arrow.svg";
import rightArrow from "../../../../images/right-arrow.svg";
import "./BtnBanner.css";
export default function BtnBanner({ direction, moveBanner }) {
  return (
    <button
      onClick={moveBanner}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
