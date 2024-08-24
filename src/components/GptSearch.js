import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import Netflix_Background from "../assets/Netflix-Background.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={Netflix_Background} alt='BackgroundImage' />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
