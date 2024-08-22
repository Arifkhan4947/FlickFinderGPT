import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";       // Here we import our "gptSlice" and provide a name own "getReducer".

// This is the redux Store
const appStore = configureStore ({
    reducer: {
        user: userReducer,          // This Slice came from the "userSlice.js"
        movies: moviesReducer,      // This Slice came from the "moviesSlice.js"
        gpt: gptReducer,            // This Slice came from the "gptSlice.js" // here "gpt" is the name which we are given inside the Slice. 
    },
    
});

    export default appStore;
