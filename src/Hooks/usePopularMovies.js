import { useDispatch , useSelector} from "react-redux";
import {addPopularMovies } from "../utils/moviesSlice";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popular = useSelector(store => store.movies.popularMovies);
    
    const popularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        !popular && popularMovies();
    } , [popular , popularMovies]);
}

export default usePopularMovies;

//data fetch kr raha hai IMBD se or store mai update kr raha hai