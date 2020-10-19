import React from 'react';
import SearchBar from './SearchBar';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className='searchBox'>
      <div className='searchBox__imageContainer'>
        <img
          className='searchBox__image'
          src={`https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/r2NcIZ1FPMlxCty3vRITVTgGNVS.jpg`}
          alt='searchBox'
        />
      </div>
      <div className='searchBox__contentContainer'>
        <div className='searchBox__WelcomeText'>
          <h1 className='searchBox__WelcomeText_h1'>Welcome</h1>
          <h2 className='searchBox__WelcomeText_h2'>
            Millions of movies discover. Explore now.
          </h2>
        </div>
        <div className='searchBox__searchContainer'>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
