import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,   // initial state is null 
        popularMovies: null,
        trailerVideo: null, 
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {    // after that addNowPlayingMovies function is call for state will change into action.payload and we using this function we can dispatch the "movies" data in "Brwose.js"
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {    
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        } 
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = moviesSlice.actions;


export default moviesSlice.reducer;