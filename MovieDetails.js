// MovieDetails.js
import React, { useState } from 'react';

const MovieDetails = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [userRated, setUserRated] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setUserRated(true);
    // API call to update the rating
  };

  return (
    <div>
      <h2>Movie Details</h2>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Current Rating: {movie.rating}</p>
      {userRated ? (
        <p>You have rated this movie: {rating}</p>
      ) : (
        <RatingComponent onRatingChange={handleRatingChange} />
      )}
    </div>
  );
};

export default MovieDetails;
