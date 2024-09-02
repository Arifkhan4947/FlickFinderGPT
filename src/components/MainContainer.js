import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const [isMuted, setIsMuted] = useState(true);  // State for muting/unmuting

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return null;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    // Function to toggle mute/unmute
    const handleToggleMute = () => {
        setIsMuted(!isMuted);
        const iframe = document.getElementById('youtube-video');
        if (iframe) {
            iframe.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: isMuted ? 'unMute' : 'mute'
                }),
                '*'
            );
        }
    };

    return (
        <div className="pt-[20%] bg-black md:pt-0">
            <VideoTitle 
                title={original_title} 
                overview={overview} 
                onToggleMute={handleToggleMute} 
                isMuted={isMuted}
            />
            <VideoBackground 
                movieId={id} 
                isMuted={isMuted}
            />
        </div>
    );
};

export default MainContainer;
