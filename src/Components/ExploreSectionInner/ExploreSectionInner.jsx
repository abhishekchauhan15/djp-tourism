import React from "react";
import CityCard from "../CityCard/CityCard";
import "./ExploreSectionInner.css";

function ExploreSectionInner({ region, cityList }) {
  return (
    <div className="exploreSectionInner">
      <div className="exploreSectionInner_heading">
        <h1>{region}</h1>
      </div>
      <div className="exploreSectionInner__cities">
        {cityList.map((city) => (
          <CityCard city={city} />
        ))}
      </div>
    </div>
  );
}

export default ExploreSectionInner;
