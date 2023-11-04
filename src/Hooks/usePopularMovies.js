import { useDispatch } from "react-redux";
import {addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        popularMovies();
    } , []);
}

export default usePopularMovies;

//data fetch kr raha hai IMBD se or store mai update kr raha hai