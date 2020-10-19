import React, { useEffect } from 'react';
import MovieMiniCard from './MovieMiniCard';
import './TabSlider.css';

import LinearProgress from '@material-ui/core/LinearProgress';
const TabSlider = (props) => {
  const { loading, getList, list, listLength, withTitle, title } = props;

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className='tabSlider'>
      {withTitle && (
        <div className='tabSlider__titleContainer'>
          <div className='tabSlider__title'>{title}</div>
        </div>
      )}
      <div className='tabSlider__listContainer'>
        {!loading &&
          list &&
          list
            .filter((item) => item.poster_path)
            .filter((item, i) => i < listLength)
            .map((item) => <MovieMiniCard movie={item} key={item.id} />)}
        {loading && <LinearProgress />}
      </div>
    </div>
  );
};

export default TabSlider;
