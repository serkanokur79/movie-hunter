import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Movie from './pages/Movie.js';
import Footer from './pages/Footer.js';
import Header from './pages/Header.js';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults.js';
import MovieState from './context/movies/MovieState';


function App() {

  return (
            <MovieState>
                     <Router>
              <div className='App'>
                <Header />
                <div className='App_middle'>
                  <Switch>
                    <Route exact path='/'>
                      <Home />
                    </Route>
                    <Route path='/searchResults'>
                      <SearchResults />
                    </Route>
                    <Route path='/movie/:movieId'>
                      <Movie />
                    </Route>
                  </Switch>
                </div>
                <Footer />
              </div>
            </Router>
                 </MovieState>
  );
}

export default App;
