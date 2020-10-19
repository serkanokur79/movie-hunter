import React, { useState } from 'react';
import TMDb from '../images/TMDb.svg';
import './Header.css';
import { useHistory } from 'react-router-dom';
import SearchBarMaterial from '../components/SearchBarMaterial';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

function Header() {
  const [searchBox, setSearchBox] = useState(false);
  const history = useHistory();


  return (
    <div>
      <div className='header'>
        <div className='header__content'>
          <div className='header__leftContainer'>
            <div
              className='header__logoContainer'
              onClick={() => history.push('/')}
            >
              <img src={TMDb} alt='TMDB Logo' className='header__logo' />
              <div className='header__title'>Movie Hunter</div>
            </div>
       
          </div>
          <div className='header__rightContainer'>
            <div className='header__webSearch'>
              <SearchBarMaterial />
            </div>
            {!searchBox && (
              <div
                onClick={() => setSearchBox(true)}
                className='header__mobilesearch'
              >
                <IconButton aria-label='open search bar' color='inherit'>
                  <SearchIcon />
                </IconButton>
              </div>
            )}
            {searchBox && (
              <div
                onClick={() => setSearchBox(false)}
                className='header__mobilesearch'
              >
                <IconButton aria-label='close search bar' color='inherit'>
                  <CancelIcon />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
      {searchBox && (
        <div className='header__searchBarContainer header__mobilesearch'>
          <SearchBarMaterial />
        </div>
      )}
    </div>
  );
}

export default Header;
