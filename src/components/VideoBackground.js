import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId, isMuted }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const playerRef = useRef(null);
    // console.log(playerRef)
    useMovieTrailer(movieId);

    useEffect(() => {
        if (trailerVideo?.key) {
            playerRef.current = new window.YT.Player('youtube-video', {
                videoId: trailerVideo.key,
                playerVars: {
                    autoplay: 1,
                    mute: isMuted ? 1 : 0,
                    loop: 1,
                    playlist: trailerVideo.key,
                },
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                    },
                },
            });
        }
    }, [trailerVideo?.key]);

    useEffect(() => {
        if (playerRef.current) {
            if (isMuted) {
                console.log(playerRef)
                playerRef.current.mute();
            } else {
                playerRef.current.unMute();
            }
        }
    }, [isMuted]);

    return (
        <div className='-mt-[33%] md:-mt[20%] md:h-full md:-mt-0'>
            <div id="youtube-video" className='w-full md:h-screen md:w-screen aspect-video'></div>
        </div>
    );
};

export default VideoBackground;

