import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="cont">
      <div className="slider"></div>
      <ul className="nav"></ul>
      <div data-target="right" className="side-nav side-nav--right"></div>
      <div data-target="left" className="side-nav side-nav--left"></div>
    </div>
  );
}

export default Slider;
