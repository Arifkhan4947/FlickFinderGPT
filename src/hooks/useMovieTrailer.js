import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import axios from "../utils/axios"
const useMovieTrailer = (movieId) => {

    // Fetch trailer video && updating the store with trailer video data
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        // const data = await fetch(
        //     "https://api.themoviedb.org/3/movie/" +
        //     movieId +
        //     "/videos?language=en-US", 
        //     API_OPTIONS 
        // );
        const data=await axios.get(`/movie/${movieId}//videos?language=en-US`);
        // console.log(data)
        // const json = await data.json();

        const filterData = data.data.results?.filter( video => video.type === "Trailer" )
        console.log(filterData)
        const trailer = filterData.length ? filterData[0] : data.data.results[0];   // if the trailer is present their then show trailer other wise show anything from json.results
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        !trailerVideo && getMovieVideos();   // If "nowPlayingMovies is not havinng data then call the show or call the getMoviesVideos().

    }, []);
} 


export default useMovieTrailer;