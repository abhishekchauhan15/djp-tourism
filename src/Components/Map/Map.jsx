import React, { useState } from "react";
import InfoCard from "./InfoCard";
import "./Map.css";
import MapImg from "./MapImg";

function Map() {
  const [state, setstate] = useState("csas");
  return (
    <div className="map">
      <div className="map__left">
        <InfoCard state={state} />
      </div>
      <div className="map__right">
        <MapImg setstate={setstate} />
      </div>
    </div>
  );
}

export default Map;

// import React from "react";
// import "./Map.css";

// function Map() {
//   return (
//     <div className="map">
//       dcs

//     </div>
//   );
// }

// export default Map;
