import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

// This "useNowPlayingMovies"  is the custom Hook. which i use in my "Browse.js" for fetching the all movies data 
const useNowPlayingMovies = () => {

    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTIONS
    );
    const json  = await data.json();
    dispatch(addNowPlayingMovies(json.results));   // here we push the json.result data into our "moviesSlice.js".  
    };


    useEffect( () => {
    getNowPlayingMovies();
    },[]);

};

export default useNowPlayingMovies;