import React, { useEffect } from 'react';
import Netflix_Logo from "../assets/Netflix_Logo.png"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';   
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");   // HW for build "error" page component.
    });
  };

  // useEffect is used for one-time actions.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in              
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");  
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  // Handle language selection
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src={Netflix_Logo} alt='logo' 
      />
      {user && (
        <div className='flex p-2'>
          {showGptSearch && (
            <select 
              className="p-2 m-2 bg-gray-900 text-white" 
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img 
            className='w-12 h-12'
            src={user?.photoURL} alt="usericon"
          />
          <button onClick={handleSignOut} className='font-bold text-white'>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
