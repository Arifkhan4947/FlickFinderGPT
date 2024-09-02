import React, { useEffect } from "react";
import Netflix_Logo from "../assets/Netflix_Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import Topnav from "./TopNav";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error"); // HW for build "error" page component.
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
      dispatch(toggleGptSearchView());
      console.log(showGptSearch)
    // Toggle GPT Search
  };

  // Handle language selection
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute h-[55px] md:h-[100px] w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between md:justify-between items-center">
      <img
        className="w-[70px] h-[32px] md:h-[65px] md:w-44  md:mx-0 -ml-6"
        src={Netflix_Logo}
        alt="logo"
      />
      {user && (
        <div className="w-full flex p-2 -mr-7 md:mr-2">
          <Topnav/>
          <div className="flex items-center gap-1">
            <img
              className="h-[22px] w-6 md:w-10 md:h-9 rounded-sm"
              src={user?.photoURL}
              alt="usericon"
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white  text-[11px] md:text-[16px] tracking-tight"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
