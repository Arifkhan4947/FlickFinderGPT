import React from 'react';
import { CgPlayButtonO } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoTitle = ({ title, overview, onToggleMute, isMuted }) => {
    const words = overview.split(' ');
    const shortOverview = words.slice(0, 15).join(' ') + (words.length > 15 ? '...' : '');

    return (
        <div className='w-screen aspect-video -mt-[10%] md:pt-[20%] px-4 py-4 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <div className='mt-[6%]'>
            <h1 className='text-sm md:text-6xl font-bold'>{title}</h1>
            <p className="text-[10px] md:text-lg w-[150px] md:py-6 md:w-1/3">
                <span className="block md:hidden">{shortOverview}</span>
                <span className="hidden md:block">{overview}</span>
            </p>

            <div className='flex mt-1 md:mt-0'>
                <button className='bg-white text-black h-[20px] w-[50px] md:w-[130px] md:h-[50px] md:p-3 md:px-8 text-[11px] md:text-xl flex justify-center items-center gap-[3px] md:gap-2 
                    rounded-lg hover:bg-opacity-80'>
                    <span className="text-[14px] md:text-[34px]"><CgPlayButtonO /></span> 
                    Play
                </button>
                <button className='mx-2 bg-gray-500 text-white h-[20px] md:h-[50px] w-[80px] md:w-[200px] md:p-3 md:px-8 text-[11px] md:text-xl flex justify-center items-center gap-1 md:gap-2
                    bg-opacity-50 rounded-lg'>
                    <span className="text-[15px] md:text-[34px]"><IoIosInformationCircleOutline /></span>
                    More Info
                </button>
                {/* Mute/Unmute Button */}
                <button 
                    onClick={onToggleMute} 
                    className='border ml-[30%] md:mt-[1%] md:ml-[65%] bg-black bg-opacity-30 text-white p-2 rounded-full h-[30px] w-[30px] md:h-[50px] md:w-[50px] flex items-center justify-center'
                >
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                </button>
            </div>
            </div>
        </div>
    );
};

export default VideoTitle;
