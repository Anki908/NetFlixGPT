import React from 'react'
import Header2 from './header2';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header2/>
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse