import { useDispatch } from "react-redux";
import { addNowPlayMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const NowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayMovies(json.results));
        // console.log(json);
    }

    useEffect(() => {
        NowPlayingMovies();
    } , []);
}

export default useNowPlayingMovies;

//data fetch kr raha hai IMBD se or store mai update kr raha hai