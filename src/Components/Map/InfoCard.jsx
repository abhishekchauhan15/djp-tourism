import React from "react";
import "./InfoCard.css";
function InfoCard({ index, placesData }) {
  return (
    <div className="infoCard">
      {index === null ? (
        <>
          <h1>Explore The Unexplored</h1>
          <hr />
          <p>
            India is a land where diversity makes its mark in every possible
            way. India’s geographies that define its physical existence are the
            major examples of this distinguishing trait. The country shows a
            beautiful coexistence of snow-clad trenches, warm sandy deserts,
            tropical beaches, lush green forests, all in one chunk of land.
            Nature tours are probably the best in India as they let you explore
            the different moods of the country. Whatever landscape one is
            looking for, India does not let him return disappointed.
          </p>
        </>
      ) : (
        <div className="InfoCard__place">
          <h1>{placesData[index].name}</h1>
          <hr />
          <p>{placesData[index].description}</p>
          <button
            className="btn i-btn"
            id="colwhite"
            onClick={() => {
              window.open(`/city/${index}`, "_blank");
            }}
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
