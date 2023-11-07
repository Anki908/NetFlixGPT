import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black'>
        <div className='mt-0 md:-mt-52 pl-6 relative z-20'>
            <MovieList title = "Now Playing" movies = {movies.nowPlayingMovies} />
            <MovieList title = "Upcoming Movies" movies = {movies.upcomingMovies} />
            <MovieList title = "Popular Movies" movies = {movies.popularMovies} />
            <MovieList title = "Top Movies" movies = {movies.topMovies} />
            <MovieList title = "Fantasy Movies" movies = {movies.nowPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer
