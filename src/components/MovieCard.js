import React from 'react';
import './MovieCard.css';
import { useHistory } from 'react-router-dom';
import MovieRating from './MovieRating';
import Moment from 'react-moment';

function MovieCard({ movie }) {
  const {
    title,
    id,
    vote_average,
    release_date,
    poster_path,
    overview,
  } = movie;
  const history = useHistory();

  return (
    <div className='card' onClick={() => history.push(`/movie/${id}`)}>
      <div className='card__imageContainer'>
        <img
          className='card__image'
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title + 'poster'}
        />
        <div className='card__userScoreLogo'>
          <MovieRating vote_average={vote_average} />
        </div>
      </div>
      <div className='card__content'>
        <h3 className='card__title'>
          {title
            ? title.length > 38
              ? title.substring(0, 35) + '...'
              : title
            : null}
        </h3>
        <div className='card__infos'>
          <div className='card__infoItem'>
            <Moment parse='YYYY-MM-DD' format='DD MMM, YYYY'>
              {release_date}
            </Moment>
          </div>
        </div>
        <div className='card__decr'>
          {overview.length > 230
            ? overview.substring(0, 227) + '...'
            : overview}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
