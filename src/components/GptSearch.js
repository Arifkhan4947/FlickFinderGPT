import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import Netflix_Background from "../assets/Netflix-Background.jpg";
import Topnav from './TopNav';

const GptSearch = () => {
  return (
    <>
      <div className='absolute -z-10'>
        <img className="h-screen object-cover" src={Netflix_Background} alt='BackgroundImage' />
      </div>
      <div className=''>
        <Topnav/>
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
