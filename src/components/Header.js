import React from 'react'
import Netflix_Logo from "../assets/Netflix_Logo.png"; 
import image from "../assets/image.png";
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")   // HW for build "error" page component.
    });
  }

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