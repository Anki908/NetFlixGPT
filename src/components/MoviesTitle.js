import React from 'react'

const MoviesTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-3 text-lg w-1/3'>{overview}</p>
      <div>
        <button className='bg-white text-black m-3 md:m-0 p-2 px-10 text-xl  rounded-lg hover:bg-opacity-80'>
         Play
        </button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default MoviesTitle
