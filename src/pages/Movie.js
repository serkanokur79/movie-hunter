import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Movie.css';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CurrencyFormat from 'react-currency-format';
import MovieRating from '../components/MovieRating';
import SimilarMovies from '../components/SimilarMovies';
import MovieContext from '../context/movies/MovieContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import Popup from '../components/Popup';
import YouTube from 'react-youtube';
import PersonMiniCard from '../components/PersonMiniCard';

const Movie = () => {
  const movieContext = useContext(MovieContext);
  const {
    loading,
    movie,
    getMovie,
    movieError,
    movieVideos,
    movieCast,
    trailerVideo,
    getMovieVideos,
    getMovieCast,
  
  } = movieContext;

  const [openPopup, setOpenPopup] = useState(false);
  const location = useLocation();
  const movieId = location.pathname.split('/')[2];
  const imagepath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  useEffect(() => {
    getMovie(movieId);
    getMovieVideos(movieId);
    getMovieCast(movieId);
    
  }, [movieId]);


  const {
    release_date,
    title,
    status,
    genres,
    overview,
    poster_path,
    runtime,
    tagline,
    vote_average,
    backdrop_path,
    budget,
    revenue,
    imdb_id,
    production_countries,
  } = movie;



  const moneyFormatted = (budget) => {
    if (budget > 0) {
      return (
        <CurrencyFormat
          value={budget}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      );
    } else {
      return <p>Unknown</p>;
    }
  };
  return (
    <div className='movie'>
      {!movieError && !loading && (
        <>
          <img
            className='home__image'
            src={`${imagepath + backdrop_path}`}
            alt=''
          />

          <div className='movie__containerTop'>
            <div>
              <div className='movie__container'>
                <div className='movie__topView'>
                  <div className='movie__imageContainer'>
                    <img
                      className='movie__image'
                      src={imagepath + poster_path}
                      alt={title + 'poster'}
                    />
                    
                  </div>
                  <div className='movie__info'>
                    <div className='movie__summary'>
                      <div className='movie__title'>
                        {title} <span>({release_date.split('-')[0]})</span>
                      </div>
                      <div className='movie__titleSubtitle'>
                        <div className='movie__releaseDate'>
                          {release_date.split('-').reverse().join('/')}
                        </div>
                        <ul className='movie__titleSubtitleList'>
                          <li className='movie__genre'>{genres[0].name}</li>
                          <li className='movie__length'>
                            {Math.floor(runtime / 60) +
                              'h ' +
                              (runtime - Math.floor(runtime / 60) * 60) +
                              'm'}
                          </li>
                        </ul>
                      </div>
                      <div className='movie__favBar'>
                        <div className='movie__userScoreContainer'>
                          <div className='movie__userScoreLogo'>
                            <MovieRating vote_average={vote_average} />
                          </div>
                          <div className='movie__userScoreText'>
                            <div>User</div>
                            <div>Score</div>
                          </div>

                          <div className='movie__favBarButtonContainer'>
                          <IconButton
                              color='inherit'
                              className='movie__trailerButton'
                              onClick={() => setOpenPopup(true)}
                              style={{ cursor: 'pointer' }}
                            >
                              <PlayArrowIcon />
                              Trailer
                            </IconButton>
                            <Popup
                              title={trailerVideo[0]}
                              openPopup={openPopup}
                              setOpenPopup={setOpenPopup}
                            >
                              <YouTube
                                videoId={trailerVideo[1]}
                                opts={{
                                  height: '720',
                                  width: '1080',
                                  playerVars: {
                                    // https://developers.google.com/youtube/player_parameters
                                    autoplay: 0,
                                  },
                                }}
                                onReady={(event) => event.target.pauseVideo()}
                              />
                            </Popup>
                          </div>
                        </div>
                      </div>
                      <div className='movie__tagLine'>{tagline}</div>
                      <h3 className='movie__overviewTitle'>Overview</h3>
                      <div className='movie__overview'>{overview}</div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          
   
          <div className='movie__moreInfoCastContainer'>
           <div className='movie__moreInfoSubtitle'> Main Cast:</div>
           <div className="movie__moreInfoCast">
          {movieCast?.filter(person => person.order <9)            
            .filter(person => person.profile_path !== null)
            .map(person =><PersonMiniCard person={person} />)}
          </div> 
</div>
          <div className='movie__moreInfoContainer'>     
            <div className='movie__moreInfo'>
              <div className='movie__moreInfoSubtitle'>Origin</div>
              <div className='movie__moreInfoText'>
                {production_countries[0].name}
              </div>
            </div>
            <div className='movie__moreInfo'>
              <div className='movie__moreInfoSubtitle'>Budget</div>
              <div className='movie__moreInfoText'>
                {budget !== 'Unknown' ? moneyFormatted(budget) : budget}
              </div>
            </div>
            <div className='movie__moreInfo'>
              <div className='movie__moreInfoSubtitle'>Revenue</div>
              <div className='movie__moreInfoText'>
                {revenue !== 'Unknown' ? moneyFormatted(revenue) : '-'}
              </div>
            </div>
            <div className='movie__moreInfo'>
              <div className='movie__moreInfoSubtitle'>Status</div>
              <div className='movie__moreInfoText'>{status}</div>
            </div>
            <div className='movie__moreInfo'>
              <div className='movie__moreInfoSubtitle'>IMDB</div>
              <div className='movie__moreInfoText'>
                <a
                  rel='noopener noreferrer'
                  href={`https://www.imdb.com/title/${imdb_id}/`}
                  target='_blank'
                >
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png'
                    alt='imdb link'
                    className='movie__imdbLink'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='movie__videosContainer'>
            {movieVideos.map((video, i) => (
              <div key={i} className='movie__video'>
                <div className='movie__videoTypeText'>{video.type}:</div>
                <YouTube
                  videoId={video.key}
                  opts={{
                    height: '280',
                    width: '525',
                    playerVars: {
                      // https://developers.google.com/youtube/player_parameters
                      autoplay: 0,
                    },
                  }}
                  onReady={(event) => event.target.pauseVideo()}
                />
              </div>
            ))}
          </div>
          <div className='movie__similarMovies'>
            <SimilarMovies movieId={movieId} />
          </div>
        </>
      )}
      {loading && <LinearProgress />}
      {movieError && !loading && <h1>Movie not found!</h1>}
    </div>
  );
};

export default Movie;
