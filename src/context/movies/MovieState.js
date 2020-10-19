import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './MovieContext';
import MovieReducer from './MovieReducer';
import moment from 'moment';
import {
  SET_QUERY,
  SET_SEARCHEDQUERY,
  SET_MOVIES,
  SET_LATESTMOVIES,
  SET_MOVIEVIDEOS,
  SET_TRAILERVIDEO,
  SET_MOSTRATEDMOVIES,
  SET_TOTALRESULTS,
  SET_CURRENTPAGE,
  SET_TOTALPAGES,
  SET_MOVIE,
  SET_MOVIECAST,
  SET_POPULARMOVIES,
  SET_TRENDINGTODAY,
  SET_TRENDINGWEEK,
  SET_MOVIEERROR,
  SET_LOADING,
} from '../types';

const MovieState = (props) => {
  const initialState = {
    query: '',
    searchedQuery: '',
    movies: [],
    movieVideos: [],
    trailerVideo: [],
    latestMovies: [],
    mostRatedMovies: [],
    popularMovies:[],
    trendingToday:[],
    trendingWeek:[],
    totalResults: 1,
    currentPage: 1,
    totalPages: 1,
    movie: {},
    movieCast: [],
    movieCrew: [],
    favMovies: [],
    loading: false,
    movieError: true,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  //Set Query
  const setQuery = (query) => {
    dispatch({ type: SET_QUERY, payload: query });
  };

  // Search movies
  const searchMovies = async (query, pageNumber) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&language=en-US&query=${query}&page=${pageNumber}&include_adult=false&sort_by=rating.desc`;
    setLoading();
    const res = await axios.get(url);
    setSearchQuery(query);
    setMovies(res.data.results);
    setTotalResults(res.data.total_results);
    setTotalPages(res.data.total_pages);
    setCurrentPage(res.data.page);
  };
  // get latest movies
  const getLatestMovies = async (page) => {
    let theStartDate = moment().subtract(15, 'days').format("YYYY-MM-DD");
    console.log(theStartDate);
    let theEndDate = moment().add(1, 'months').format("YYYY-MM-DD");
    console.log(theEndDate);
    const url = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${theStartDate}&primary_release_date.lte=${theEndDate}&language=en-US&adult=false&sort_by=popularity.desc&page=${page}&api_key=b8f6d41c97c40c0d5d8d498c90fdffc7`;
   // setLoading();
    const res = await axios.get(url);
    setlatestMovies(res.data.results);
    setTotalResults(res.data.total_results);
    setTotalPages(res.data.total_pages);
    setCurrentPage(res.data.page);
  };
  // gest most rated movies

  const getMostRatedMovies = async (page) => {
    const url = `http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000&api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&language=en-US&page=${page}`;
    //setLoading();
    const res = await axios.get(url);
    setMostRatedMovies(res.data.results);
    setTotalResults(res.data.total_results);
    setTotalPages(res.data.total_pages);
    setCurrentPage(res.data.page);
  };

// get popular 

  const getPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&language=en-US&page=1`;
    setLoading();
    const res = await axios.get(url);
    setPopularMovies(res.data.results);
  };
//set popular movies
  const setPopularMovies = (data) =>{
    dispatch({ type: SET_POPULARMOVIES, payload: data})
  }

  // get trending today
   const getTrendingTodayMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&page=1`;
    setLoading();
    const res = await axios.get(url);
    setTrendingTodayMovies(res.data.results);
  };

  //set Trending today videos
  const setTrendingTodayMovies = (data) =>{
    dispatch({ type: SET_TRENDINGTODAY, payload: data})
  }

  // get trending week videos
  const getTrendingWeekMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&page=1`;
    setLoading();
    const res = await axios.get(url);
    setTrendingWeekMovies(res.data.results);
  };

    //set Trending week videos
  const setTrendingWeekMovies = (data) =>{
    dispatch({ type: SET_TRENDINGWEEK, payload: data})
  }


  //Set Searched Query
  const setSearchQuery = (query) => {
    dispatch({ type: SET_SEARCHEDQUERY, payload: query });
  };

  //Set movies
  const setMovies = (movies) => {
    dispatch({ type: SET_MOVIES, payload: movies });
  };
  //Set latest movies
  const setlatestMovies = (movies) => {
    dispatch({ type: SET_LATESTMOVIES, payload: movies });
  };
  //Set most rated movies
  const setMostRatedMovies = (movies) => {
    dispatch({ type: SET_MOSTRATEDMOVIES, payload: movies });
  };

  //Set total results
  const setTotalResults = (totalResults) => {
    dispatch({ type: SET_TOTALRESULTS, payload: totalResults });
  };

  // Set currentPage
  const setCurrentPage = (currentPage) => {
    dispatch({ type: SET_CURRENTPAGE, payload: currentPage });
  };

  //Set Total Pages
  const setTotalPages = (totalPages) => {
    dispatch({ type: SET_TOTALPAGES, payload: totalPages });
  };

  // Get movie
  const getMovie = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7`;
    setLoading();
    try {
      const res = await axios.get(url);
      console.log('movie ' + movieId + ' successfully loaded');
      setMovie(res.data);
      setMovieError(false);
    } catch (error) {
      console.log('movie ' + movieId + 'not found!!!');
      setMovieError(true);
      setMovie([]);
    }
  };
  // Get movie videos
  const getMovieVideos = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7&language=en-US`;
    setLoading();
    try {
      const res = await axios.get(url);
      setMovieVideos(res.data.results);
      
      for (let i = 0; i < res.data.results.length; i++) {
        if (res.data.results[i].type === 'Trailer') {
        const trailer = [res.data.results[i].name, res.data.results[i].key];
        setTrailerVideo(trailer);
        }
      }
    } catch (error) {
      console.log('movie ' + movieId + 'does not have videos');
      setMovieVideos([]);
    }
  };
 // get movie casting
 const getMovieCast = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7`;
    setLoading(true);
    try {
      const res = await axios.get(url);
      setMovieCast(res.data.cast);
      console.log('movie ' + movieId + ' cast loaded!!!');
      } catch (error) {
      console.log('movie ' + movieId + ' cast not found!!!');
      setMovieCast([]);
    }
  };
  
  // set movie cast
 const setMovieCast = (data) =>
    dispatch({ type: SET_MOVIECAST, payload: data });

 const getMovieCrew = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b8f6d41c97c40c0d5d8d498c90fdffc7`;
    setLoading(true);
    try {
      const res = await axios.get(url);
      setMovieCrew(res.data.crew);
      console.log('movie ' + movieId + ' crew loaded!!!');
      } catch (error) {
      console.log('movie ' + movieId + ' crew not found!!!');
      setMovieCrew([]);
    }
  };

 const setMovieCrew = (data) =>  dispatch({ type: SET_MOVIECAST, payload: data })
 

  //set Movie videos
  const setMovieVideos = (data) =>
    dispatch({ type: SET_MOVIEVIDEOS, payload: data });

  //set Trailer video
  const setTrailerVideo = (data) =>
    dispatch({ type: SET_TRAILERVIDEO, payload: data });

  //Set movie data to
  const setMovie = (movie) => dispatch({ type: SET_MOVIE, payload: movie });

  // setMovieError
  const setMovieError = (bool) =>
    dispatch({ type: SET_MOVIEERROR, payload: bool });

  // Add movie to favMovies

  // remove movie from favMovies

  // SetLoading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        query: state.query,
        searchedQuery: state.searchedQuery,
        currentPage: state.currentPage,
        movies: state.movies,
        movieVideos: state.movieVideos,
        movieCast: state.movieCast,
        movieCrew: state.movieCrew,
        popularMovies: state.popularMovies,
        trendingToday: state.trendingToday,
        trendingWeek: state.trendingWeek,
        trailerVideo: state.trailerVideo,
        totalResults: state.totalResults,
        latestMovies: state.latestMovies,
        mostRatedMovies: state.mostRatedMovies,
        movie: state.movie,
        movieError: state.movieError,
        favMovies: state.favMovies,
        loading: state.loading,
        totalPages: state.totalPages,
        setQuery,
        setSearchQuery,
        searchMovies,
        setMovies,
        getMovie,
        setMovie,
        setLoading,
        setTotalResults,
        setCurrentPage,
        setTotalPages,
        getLatestMovies,
        getMostRatedMovies,
        getMovieVideos,
        getMovieCast,
        getMovieCrew,
        getTrendingTodayMovies,
        getTrendingWeekMovies,       
getPopularMovies
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
