import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import axios from "../utils/axios"

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const  data  =await axios.get(`/movie/popular?language=en-US&page=1`);
    console.log(data.data.results)
    dispatch(addPopularMovies(data.data.results)); // here we push the json.result data into our "moviesSlice.js".
  };
  useEffect(() => {
    !popularMovies && getPopularMovies(); // if the popularMovies is not there then call the "getPopularMovies() for get the data."
  }, []);
};

export default usePopularMovies;
