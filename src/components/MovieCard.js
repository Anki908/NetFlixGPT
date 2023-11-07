import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {

  if(!posterPath) return null;
  return (
    <div className='w-24 md:w-32 pr-4 transition duration-500 hover:scale-110'>
      <img alt = "poster" src = {IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
