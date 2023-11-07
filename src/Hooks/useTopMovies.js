import { useDispatch } from "react-redux";
import {addTopMovies} from "../utils/moviesSlice";
import { useEffect  } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useSelector } from "react-redux";

const useTopMovies = () => {
    const dispatch = useDispatch();

    const topM = useSelector(store => store.movies.topMovies);

    const topMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopMovies(json.results));
    }

    useEffect(() => {
        !topM && topMovies();
    } , []);
}

export default useTopMovies;