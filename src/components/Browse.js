import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';   // Here i import our custom Hook and use it 
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);   // it's called the chaining using useSelector Hook.

 
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/> 
      {                                      // Here the "showGptSearch" is the boolean variable (initialState) which is come from "gptSlice".
        showGptSearch ? (<GptSearch/>) :    // if showGptSearch is true then show this component "<GptSearch/>" else then show other component.
        ( <>                                {/* This Tag is called React Fragment. That is use in jsx for the parent div */}   
            <MainContainer/>
            <SecondaryContainer/> 
          </>
        )
      }
      
    </div>
  );
};

export default Browse;