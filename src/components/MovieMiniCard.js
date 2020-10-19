import React from 'react';
import './MovieMiniCard.css';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import MovieRating from './MovieRating';

function MovieMiniCard({ movie }) {
  const {
    title,
    id,
    vote_average,
    release_date,
    poster_path,
 
  } = movie;
  const history = useHistory();

  return (
    <div className='movieMiniCard' onClick={() => history.push(`/movie/${id}`)}>
      <div className='movieMiniCard__imageContainer'>
        <img
          className='movieMiniCard__image'
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title + 'poster'}
        />
      </div>
      <div className='movieMiniCard__userScoreLogo'>
        <MovieRating vote_average={vote_average} />
      </div>
      <div className='movieMiniCard__content'>
        <h3 className='movieMiniCard__title'>{title}</h3>
        <div className='movieMiniCard__infos'>
          <div className='movieMiniCard__infoItem'>
            <Moment parse='YYYY-MM-DD' format='DD MMM, YYYY'>
              {release_date }
            </Moment>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieMiniCard;
