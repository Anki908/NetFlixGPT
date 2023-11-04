import { useDispatch } from "react-redux";
import {addTopMovies} from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTopMovies = () => {
    const dispatch = useDispatch();
    const topMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopMovies(json.results));
    }

    useEffect(() => {
        topMovies();
    } , []);
}

export default useTopMovies;