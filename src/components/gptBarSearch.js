import React from 'react'
import lang from "../utils/languageContants"
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovieResult } from "../utils/GptSlice"

const GptBarSearch = () => {
    const dispatch = useDispatch();

    const langKey = useSelector((store) => store.config.lang);

    const SearchText = useRef(null);

    const searchGptMovies = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const HandleSearch = async () => {

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + SearchText?.current?.value + ". only give me name of 12 movies , comma seperated like the example result given ahead. Example Result: Welcome , OMG , Gadar , No Entry , Dhamaal";
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResult.choices) {
            // TODO: Write Error Handling
            return null;
        }

        // console.log(gptResult.choices);

        const gptMovies = gptResult.choices?.[0]?.message?.content.split(","); //Movies extract kri gpt se 

        const promiseArray = gptMovies.map((movie) => searchGptMovies(movie));
        //searchGptMovies is a async function that will return promise which are not resolved yet so we get the array of Promises

        const tmdbResults = await Promise.all(promiseArray);
        //it will wait for all promise to be resolved
        // console.log(gptMovies);
        // console.log(tmdbResults);

        dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
    }

  return (
    <div>
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className=' w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) =>e.preventDefault()}>
            <input ref = {SearchText} type = "text" className=' p-2 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg' onClick={HandleSearch}>{lang[langKey].search}</button>
        </form>
        </div>
    </div>
  )
}

export default GptBarSearch
