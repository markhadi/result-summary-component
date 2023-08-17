import React from "react";
import "./ScoreCircle.css";

const ScoreCircle = ({ score }) => {
  return (
    <div className="score-circle">
      <div className="result-highlight">
        <strong>{score}</strong>
        <span>of 100</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
