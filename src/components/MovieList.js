import React, { useEffect, useContext } from 'react';
import Pagination from './Pagination';
import MovieCard from './MovieCard';

import './MovieList.css';
import MovieContext from '../context/movies/MovieContext';

const MovieList = () => {
  const movieContext = useContext(MovieContext);
  const {
    movies,
    searchMovies,
    currentPage,
    searchedQuery,
    totalPages,
    setCurrentPage,
  } = movieContext;

  useEffect(() => {
    searchMovies(searchedQuery, currentPage);
  }, [searchedQuery, currentPage]);

  return (
    <div className='movielist'>
      {searchedQuery && (
        <div>
          <div className='movielist__list'>
            {movies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
      {!searchedQuery && <h1>Use search bar to make a search</h1>}
    </div>
  );
};

export default MovieList;
