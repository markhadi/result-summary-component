import React from "react";
import "./ScoreSummary.css";
import SummaryTitle from "./SummaryTitle/SummaryTitle";
import CategoryScoreCard from "./CategoryScoreCard/CategoryScoreCard";
import ContinueButton from "./ContinueButton/ContinueButton";

const ScoreSummary = () => {
  return (
    <section className="score-summary">
      <SummaryTitle />
      <CategoryScoreCard />
      <ContinueButton />
    </section>
  );
};

export default ScoreSummary;
