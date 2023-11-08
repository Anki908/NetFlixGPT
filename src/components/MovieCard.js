import React from 'react'
import { IMG_CDN } from '../utils/constant'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { MovieId } from '../utils/moviesSlice';

const MovieCard = ({posterPath , id}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleClick = ({id}) => {
    dispatch(MovieId(id));
    navigate("/Result")
  }

  if(!posterPath) return null;
  return (
    <div className='w-24 md:w-32 pr-4 transition duration-500 hover:scale-110'>
      <img onClick={(e) => HandleClick({id})}  alt = "poster" src = {IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
