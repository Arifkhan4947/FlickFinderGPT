import React, { useEffect } from 'react'
import Netflix_Logo from "../assets/Netflix_Logo.png"; 
import image from "../assets/image.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error")   // HW for build "error" page component.
    });
  }

  // useEffect use for once time action should be happen.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in              
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

          navigate("/browse");  
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      // Unsubscribe when component unmounts
      return  () => unsubscribe();
  },[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
          className='w-44'
          src={Netflix_Logo} alt='logo' 
          />

        { user && (
          <div className='flex p-2'>
            <img 
              className='w-12 h-12'
              src={user?.photoURL} alt="usericon"
            />
            <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)
            </button>
          </div>
        )}

    </div>
  )
}

export default Header