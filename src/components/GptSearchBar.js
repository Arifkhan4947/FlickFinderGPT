import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants';    // this is come from "languageConstant" where we mae it dynamic and use it fro multiple language.
import { useSelector } from 'react-redux';
import openai from "../utils/openai";        // this is come from utils folder where i create "openai.js" file where having my "OPENAI_KEY" and constant method.

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);      // this is use for copy the search input text. further use in "handleGptSearchClick" func.
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    
    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);
        // Make an API call to GPT API get Movie Results
        
        try {
            const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query : " + 
                searchText.current.value + 
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
            // This "gptResult" storing the data which coming from GPT. In future we can use this technologies this is PAID Service.
            const gptResults = await openai.chat.completions.create({  
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });
    
            // console.log(gptResults.choices);    // This "gptResults" store gpt result which answer from the gpt but we have to pay for use this service
            setErrorMessage("");   // Clear any previous error messages 

        } 
        catch(error) {
            if (error.response && error.response.status === 429) {
                setErrorMessage("You have exceeded your API quota. Please check your OpenAI account for more details.");
                // Optionally, show a user-friendly message in your UI
            } else {
                setErrorMessage("You have exceeded your API quota. Please check your OpenAI account for more details.", error.message);
            }}
        }

  return (
    <div className="pt-[10%] flex flex-col items-center justify-center">
        <form 
            className="w-1/2 bg-black grid grid-cols-12" 
            onSubmit={(e) => e.preventDefault()}
            >
            <input
                ref={searchText} 
                className="p-4 m-4 col-span-9" 
                type="text" 
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
                className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                onClick={handleGptSearchClick}
                >{lang[langKey].search}
            </button>
        </form>
    
        {/* Display Error Message */}
        {
            errorMessage && (
            <div className="text-red-500 mt-4">
                <p>{errorMessage}</p>
            </div>
        )}

    </div>

  )
}

export default GptSearchBar;