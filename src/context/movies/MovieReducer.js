import {
  SET_QUERY,
  SET_SEARCHEDQUERY,
  SET_MOVIES,
  SET_MOVIEVIDEOS,
  SET_TRAILERVIDEO,
  SET_LATESTMOVIES,
  SET_MOSTRATEDMOVIES,
  SET_TOTALRESULTS,
  SET_CURRENTPAGE,
  SET_TOTALPAGES,
  SET_MOVIE,
  SET_MOVIEERROR,
  SET_MOVIECAST,
  SET_TRENDINGTODAY,
  SET_TRENDINGWEEK,
  SET_POPULARMOVIES,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case SET_SEARCHEDQUERY:
      return { ...state, searchedQuery: action.payload };
    case SET_MOVIES:
      return { ...state, movies: action.payload, loading: false };
    case SET_MOVIEVIDEOS:
      return { ...state, movieVideos: action.payload };
    case SET_TRAILERVIDEO:
      return { ...state, trailerVideo: action.payload };
    case SET_TOTALRESULTS:
      return { ...state, totalResults: action.payload };
    case SET_CURRENTPAGE:
      return { ...state, currentPage: action.payload };
    case SET_TOTALPAGES:
      return { ...state, totalPages: action.payload };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_LATESTMOVIES:
      return { ...state, latestMovies: action.payload, loading: false };
    case SET_MOSTRATEDMOVIES:
      return { ...state, mostRatedMovies: action.payload, loading: false };
    case SET_MOVIE:
      return { ...state, movie: action.payload, loading: false };
    case SET_MOVIECAST:
      return { ...state, movieCast: action.payload, loading: false };
    case SET_TRENDINGTODAY:
      return { ...state, trendingToday: action.payload, loading: false };
    case SET_MOVIEERROR:
      return { ...state, movieError: action.payload, loading: false };
    case SET_TRENDINGWEEK:
      return { ...state, trendingWeek: action.payload, loading: false };
    case SET_POPULARMOVIES:
        return { ...state, popularMovies: action.payload, loading: false}
    default:
      return state;
  }
};
