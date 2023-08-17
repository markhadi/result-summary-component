import React from "react";
import "./ScoreDisplay.css";
import ResultTitle from "./ResultTitle/ResultTitle";
import ScoreCircle from "./ScoreCircle/ScoreCircle";
import FeedbackMessage from "./FeedbackMessage/FeedbackMessage";
import scoreData from "../../data/data.json";

const ScoreDisplay = () => {
  const averageScore = Math.round(
    scoreData.reduce((acc, curr) => acc + curr.score, 0) / scoreData.length
  );

  return (
    <section className="score-display">
      <ResultTitle />
      <ScoreCircle score={averageScore} />
      <FeedbackMessage />
    </section>
  );
};

export default ScoreDisplay;
