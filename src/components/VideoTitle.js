import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>            {/* title contain name of the movie */}
        <p className='py-6 text-lg w-1/3'>{overview}</p>           {/* overview contain description of the movie */}

        <div className='flex'>
            <button className='bg-white text-black p-3 px-8 text-xl flex justify-center items-center gap-2 
                rounded-lg hover:bg-opacity-80'> <span><CgPlayButtonO size={34}/></span> 
                Play
            </button>
            <button className='mx-2 bg-gray-500 text-white p-3 px-8 text-xl flex justify-center items-center gap-2
                bg-opacity-50 rounded-lg'> <span><IoIosInformationCircleOutline size={35}/></span>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle