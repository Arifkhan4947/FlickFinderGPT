import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

    // Check if movies is not null and is an array before mapping
    // if (!movies || movies.length === 0) {
    //     return <p>No movies to display</p>;  // Or any other fallback UI
    // }
   

  return ( 
    <div className='px-3 md:px-6'>
        <h1 className="font-bold text-[15px] md:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex">       
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>               
                ))}          
            </div>
        </div>
        
    </div>
  );
};

export default MovieList;