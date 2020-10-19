import React, { useContext } from 'react';
import './SearchResults.css';
import MovieList from '../components/MovieList';
import MovieContext from '../context/movies/MovieContext';
import TabBar from '../components/TabBar';
import {Helmet} from 'react-helmet';

function SearchResults() {
  const movieContext = useContext(MovieContext);
  const { searchedQuery, totalResults } = movieContext;
  console.log('totalResults', totalResults);
  return (
    <div style={{minHeight:'100vh'}}>
     <Helmet>
    <title> Movie Hunter Search Results for `${searchedQuery}`</title>
    <meta name='description' content='Millions of movies to discover. Explore now.' />
    </Helmet>
      {searchedQuery && 
        <TabBar
        labels={[
          `Movies(${totalResults})`, 
        ]}
        contents={[<MovieList />]}
        />
      }
    </div>
  );
}

export default SearchResults;
