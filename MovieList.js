// MovieList.js
import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => onMovieClick(movie)}>
          <p>{movie.title}</p>
          {/* Rating component goes here */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
