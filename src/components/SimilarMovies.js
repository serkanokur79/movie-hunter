import React, { useState, useEffect } from 'react';
import MovieMiniCard from './MovieMiniCard';
import './SimilarMovies.css';
function SimilarMovies({ movieId }) {
  const [results, setResults] = useState([]);
  const [numResults, setNumResults] = useState(0);

  const searchMovies = async (movieId) => {
    
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&language=en-US&page=1`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.results);
      setNumResults(data.total_results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    searchMovies(movieId);
  }, [movieId]);

  return (
    <div className='similarMovies'>
      {numResults > 0 && (
        <div>
          <h2>Similar movies </h2>
          <div className='similarMovies__list'>
            {results
              .slice(0, 8)
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <MovieMiniCard movie={movie} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SimilarMovies;
