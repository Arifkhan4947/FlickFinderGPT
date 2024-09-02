import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asynchmovieload, removemovie } from '../store/Actions/movieActions';
import { Link } from 'react-router-dom';
import Loader from './Loader';
const MovieDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.movie)
    useEffect(() => {
        dispatch(asynchmovieload(id))
        return () => {
            dispatch(removemovie())
        }
    }, [])
    // console.log("information is here",info)
    return info ? (
        <div className='w-screen h-screen p-[10%]' style={{
            background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/w500/${info.details.backdrop_path || info.details.poster_path})`, backgroundPosition: "center", backgroundSize: 'center'
        }}>
            {/* navigation done */}
            <nav className='w-full text-zinc-100  flex gap-10 text-2xl items-center'>
                <Link onClick={() => navigate(-1)} className="ri-arrow-left-line"></Link>
                <a target='_blank' href={info.details.homepage}><i class="ri-external-link-fill"></i></a>
                <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-earth-fill"></i></a>
                <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
            </nav>
            {/* part 2 poster and details  */}
            <div>
                <img className='h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/w500/${info.details.poster_path}`} alt="" />
            </div>
            <div className='w-[80%] gap-y-5 mt-10 flex flex flex-col'>
                
                    {info.watchproviders && info.watchproviders.flatrate && (
                        <div className='flex  gap-x-5 text-white items-center'>
                            <h1>Available on platforms</h1>
                            {info.watchproviders.flatrate.map((w, index) => (
                                <img
                                title={w.provider_name}
                                    key={index}  // Make sure to add a unique key for each element in the list
                                    className=' w-[5vh] h-[5vh] rounded-md object-cover'
                                    src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}
                    {info.watchproviders && info.watchproviders.rent && (
                        <div className='flex gap-x-5 text-white items-center'>
                            <h1 className='mr-10'>Available on rent </h1>
                            {info.watchproviders.rent.map((w, index) => (
                                <img
                                title={w.provider_name}
                                    key={index}  // Make sure to add a unique key for each element in the list
                                    className=' w-[5vh] h-[5vh] rounded-md object-cover'
                                    src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}
                    {info.watchproviders && info.watchproviders.buy && (
                        <div className='flex gap-x-5 text-white items-center'>
                            <h1 className='mr-10'>Available to buy</h1>
                            {info.watchproviders.buy.map((w, index) => (
                                <img
                                title={w.provider_name}
                                    key={index}  // Make sure to add a unique key for each element in the list
                                    className=' w-[5vh] h-[5vh] rounded-md object-cover'
                                    src={`https://image.tmdb.org/t/p/w500/${w.logo_path}`}
                                    alt=""
                                />
                            ))}
                        </div>
                    )}
                
            </div>
        </div>
    ) : <Loader></Loader>
}

export default MovieDetails