import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../assets/noimage.jpg";
const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getsearches();
  }, [query]);
  return (
    <>
      <div className=" w-[100%] h-[5vh] text-zinc-200 font-bold relative flex justify-center items-center">
        <i className="ri-search-2-line text-3xl text-zinc-400 "></i>
        <input
          onChange={(e) => {
            setquery(e.target.value);
          }}
          value={query}
          type="text"
          className="w-[50%] text-zinc-100 border-none outline-none bg-transparent text-xl mx-10 p-5"
          placeholder="search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => {
              setquery("");
            }}
            className="ri-close-circle-fill text-3xl text-zinc-400 hover:cursor-pointer"
          ></i>
        )}
        <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto rounded-lg ">
          {searches.map((s, i) => (
            <Link
              to={`${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-400 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-2 border-zinc-100"
            >
              <img
                className="h-[10vh] w-[10vh] rounded-lg mr-4"
                src={
                  s.backdrop_path || s.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noimage
                }
                alt=""
              />
              <span>
                {s.name || s.title || s.original_title || s.original_name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Topnav;
