import React, { useContext, useState } from 'react';
import './SearchBar.css';
import MovieContext from '../context/movies/MovieContext';
import { useHistory } from 'react-router-dom';

function SearchBar() {
  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;
  const history = useHistory();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query, 1);
    history.push('/searchResults');
  };

  return (
    <div className='searchBar'>
      <div className='searchBar__searchContainer'>
        <form
          className='searchBar__form'
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            type='text'
            className='searchBar__input'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            name='query'
            placeholder='Search for a movie ...'
          />
          <button
            className='searchBar__button'
            type='submit'
            disabled={query.length === 0}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
