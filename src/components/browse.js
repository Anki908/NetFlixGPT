import React from 'react'
import Header2 from './header2';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTopMovies from '../Hooks/useTopMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopMovies();

  return (
    <div>
      <Header2/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse