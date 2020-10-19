import React, { useContext } from 'react';
import TabSlider from '../components/TabSlider';
import SearchBox from '../components/SearchBox';
import './Home.css';
import MovieContext from '../context/movies/MovieContext';
import TabBar from '../components/TabBar';
import {Helmet} from 'react-helmet';

function Home() {
  const movieContext = useContext(MovieContext);
  const {
    loading,
    getLatestMovies,
    latestMovies,
    getTrendingTodayMovies,
    trendingToday,
    getTrendingWeekMovies,
trendingWeek,
popularMovies,
getPopularMovies
  } = movieContext;
  
return (
    <div className='home'>
    <Helmet>
    <title> Movie Hunter Home Page</title>
    <meta name='description' content='Millions of movies to discover. Explore now.' />
    </Helmet>
      <div className='home_searchBox'>
        <SearchBox />
      </div>

      <div className='home__row'>
        <TabBar
          labels={['LATEST MOVIES', 'POPULAR MOVIES']}
          contents={[
            <TabSlider
              loading={loading}
              getList={getLatestMovies}
              list={latestMovies}
              listLength='20'
            />,
            <TabSlider
             loading={loading}
              getList={getPopularMovies}
              list={popularMovies}
              listLength='20'
            />
          ]}
        />
      </div>
        <div className='home__row'>
        <TabBar
          labels={['TRENDING TODAY', 'TRENDING THIS WEEK']}
          contents={[
            <TabSlider
              loading={loading}
              getList={getTrendingTodayMovies}
              list={trendingToday}
              listLength='20'
            />,
            <TabSlider
              loading={loading}
              getList={getTrendingWeekMovies}
              list={trendingWeek}
              listLength='20'
            />,
          ]}
        />
      </div>
    </div>
  );
}

export default Home;
