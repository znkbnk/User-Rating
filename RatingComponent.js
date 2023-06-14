// RatingComponent.js
import React from 'react';

const RatingComponent = ({ onRatingChange }) => {
  const handleRatingClick = (rating) => {
    onRatingChange(rating);
  };

  return (
    <div>
      <h3>Rate this movie:</h3>
      <button onClick={() => handleRatingClick(1)}>1</button>
      <button onClick={() => handleRatingClick(2)}>2</button>
      <button onClick={() => handleRatingClick(3)}>3</button>
      <button onClick={() => handleRatingClick(4)}>4</button>
      <button onClick={() => handleRatingClick(5)}>5</button>
    </div>
  );
};

export default RatingComponent;
