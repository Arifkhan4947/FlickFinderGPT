import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import axios from "../utils/axios"

// This "useNowPlayingMovies"  is the custom Hook. which i use in my "Browse.js" for fetching the all movies data
const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  ); // here we fetch the data then use in line no. 24.

  const getNowPlayingMovies = async () => {
    const data = await axios.get(`/movie/now_playing?language=en-US&page=1`);
    // const json = await data.json();
    console.log("in get now playing movies")
    console.log(data.data.results)
    dispatch(addNowPlayingMovies(data.data.results)); // here we push the json.result data into our "moviesSlice.js".
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies(); // if the nowPlayingMovies is not there on UI then show only an getNowPlayingMovies().
  }, []);
};

export default useNowPlayingMovies;
