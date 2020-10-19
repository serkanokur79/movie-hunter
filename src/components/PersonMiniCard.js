import React from 'react';
import './PersonMiniCard.css';

function MovieMiniCard({ person }) {
  const {
character,
id,
name,
profile_path
  } = person;

  return (
    <div className='personMiniCard' onClick={() => console.log("person=>", id)}>
      <div className='personMiniCard__imageContainer'>
        <img
          className='personMiniCard__image'
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${profile_path}`}
          alt={ name + 'poster'}
        />
      </div>
      
      <div className='personMiniCard__content'>
      <p className='personMiniCard__title'><b>
      {name}
      </b> </p> 
      <p className='personMiniCard__title'>

      {character}</p>
      
        </div>
      </div>
    
  );
}

export default MovieMiniCard;
