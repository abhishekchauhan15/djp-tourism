import React from "react";
import ExploreSectionInner from "../ExploreSectionInner/ExploreSectionInner";
import "./ExploreSection.css";

function ExploreSection() {
  const data = ["North", "East", "West", "South"];
  const cityList = [1, 2, 3, 4];
  return (
    <div className="exploreSection">
      {data.map((direct) => (
        <ExploreSectionInner region={direct} cityList={cityList} />
      ))}
    </div>
  );
}

export default ExploreSection;
