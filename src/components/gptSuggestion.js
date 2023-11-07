import React from 'react'
import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const GptSuggestion = () => {
    const movieNames = useSelector((store) => store.gpt.movieNames);
    const movieResults = useSelector((store) => store.gpt.movieResults);
  return movieResults && (
    <div className = "p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames && movieNames.map((movieName , index) => (
            <MovieList 
             key= {movieName}
             title={movieName}
             movies={movieResults[index]}
            />
        ))}
      </div>
    </div>
  )
}

export default GptSuggestion
