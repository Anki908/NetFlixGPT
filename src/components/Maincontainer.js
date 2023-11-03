import React from 'react'
import { useSelector } from 'react-redux'
import MoviesTitle from './MoviesTitle';
import VideoBackground from './VideoBackground';

const Maincontainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return null;

    const mainMovie = movies[0];
    
    const { original_title , overview , id} = mainMovie;

  return (
    <div>
      <MoviesTitle title = { original_title} overview = {overview}/>
      <VideoBackground movieId = {id}/>
    </div>
  )
}

export default Maincontainer
