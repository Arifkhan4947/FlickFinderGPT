import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" md:h-full w-[110px] md:w-[200px] md:pr-4 ">
        <img 
          className="w-[100px] md:w-full h-[135px] md:h-full  md:object-cover rounded-sm md:rounded-md"
          alt="Movie Card" 
          src={IMG_CDN_URL + posterPath} 
        /> 
    </div>
  )
}

export default MovieCard;