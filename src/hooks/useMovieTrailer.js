import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {

    // Fetch trailer video && updating the store with trailer video data
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US", 
            API_OPTIONS 
        );
        const json = await data.json();

        const filterData = json.results.filter( video => video.type === "Trailer" )
        const trailer = filterData.length ? filterData[0] : json.results[0];   // if the trailer is present their then show trailer other wise show anything from json.results 
    
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
} 


export default useMovieTrailer;