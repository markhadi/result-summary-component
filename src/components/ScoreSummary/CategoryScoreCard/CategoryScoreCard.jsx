import React from "react";
import "./CategoryScoreCard.css";
import scoreData from "../../../data/data.json";

const CategoryScoreCard = () => {
  return (
    <div className="category-score-card">
      {scoreData.map((data, index) => (
        <ScoreCard key={index} data={data} />
      ))}
    </div>
  );
};

const ScoreCard = ({ data }) => {
  return (
    <div className={`score-card ${data.color}`}>
      <div className="score-detail">
        <div className="category-info">
          <img
            src={data.icon}
            alt={`${data.category} icon`}
            aria-hidden="true"
          />
          <span>{data.category}</span>
        </div>
        <div className="score-info">
          <span>{data.score}</span>
          <span className="dark-grey-blue-40">/ 100</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryScoreCard;
