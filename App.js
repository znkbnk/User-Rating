// App.js
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data from an API
    const fetchMovies = async () => {
      try {
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Movie Recommendation App</h1>
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
};

export default App;
