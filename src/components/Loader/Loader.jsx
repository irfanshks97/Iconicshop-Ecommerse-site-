import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper ">
      <div className="loader-scene">
        <div className="loader-shadow"></div>
        <div className="loader-scaler">
          <div className="loader-cuboid">
            <div className="cuboid-side"></div>
            <div className="cuboid-side"></div>
            <div className="cuboid-side"></div>
            <div className="cuboid-side"></div>
            <div className="cuboid-side"></div>
            <div className="cuboid-side"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
