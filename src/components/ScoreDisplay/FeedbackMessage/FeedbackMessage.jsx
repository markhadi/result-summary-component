import React from "react";
import "./FeedbackMessage.css";

const FeedbackMessage = () => {
  return (
    <div className="feedback-message">
      <h1>Great</h1>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default FeedbackMessage;
