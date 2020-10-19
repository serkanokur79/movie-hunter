import React from 'react';
import TMDb from '../images/TMDb.svg';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
    <div className="footer__Context">
     
      <p>(c)2020 - Serkan Okur - a portfolio project developed with React and {' '}
      <img src={TMDb} alt='TMDB Logo' className='footer__logo' />
       API.</p>
  
    <p>
    This product uses the TMDb API but is not endorsed or certified by TMDb.
    </p>
    </div>
    </div>
  );
}

export default Footer;
