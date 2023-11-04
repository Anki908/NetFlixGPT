import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-32 pr-4'>
      <img alt = "poster" src = {IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
