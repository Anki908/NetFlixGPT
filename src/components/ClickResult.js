import React from 'react'
import Dummy from './dummy'
import { useSelector } from 'react-redux'
import useMovieVideoData from '../Hooks/useMovieVideoData'

const ClickResult = () => {

    const Mid = useSelector((store) => store.movies);
    const id = Mid.MovieId;
    //console.log(id);

    useMovieVideoData(id);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
        <div>
           <Dummy />
        </div>
        <div>
          <iframe 
            className='w-[100%] aspect-[16/9] no-scrollbar' 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key }
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          ></iframe>
        </div>
    </div>
  )
}

export default ClickResult
