import React, {useEffect, useState} from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

function MovieRating(props) {
  const { vote_average } = props;
  const [rating, setRating]= useState(0);
  const ratingFinal = vote_average *10;

  useEffect(() => {
 if(rating<ratingFinal){
   setRating(rating+1)
 }
  }, [rating])


  return (
    <CircularProgressbarWithChildren value={rating} background
    backgroundPadding={2}
    styles={buildStyles({
      backgroundColor: '#081C22',
      textColor: '#fff',
      pathColor: `hsl(${rating +15}, 100%, 55%)`,
      textSize: '36px',
      alignItem: 'center',
      trailColor: `hsl(${rating}, 0%, 55%)`,
    })}>
    <div style={{display: 'flex'}}>
    <span style={{color: 'white', fontSize: '0.9rem',  marginBottom: '0.9rem'}}>
    {rating}
    
    </span> 
    <span style={{color: 'white', fontSize: '0.4rem'}}>
    %
    </span>
    </div>
    </CircularProgressbarWithChildren>
  
  );
}

export default MovieRating;
