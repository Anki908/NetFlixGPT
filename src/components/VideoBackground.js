import React from 'react'
import { useSelector } from 'react-redux'
import useMovieVideoData from '../Hooks/useMovieVideoData'

const VideoBackground = ({movieId}) => {

    useMovieVideoData(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe 
       className='w-[100%] aspect-[16/9] no-scrollbar' 
       src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key }
       title="YouTube video player"  
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       ></iframe>
    </div>
  )
}

export default VideoBackground
