import React, { useRef, useState } from 'react';
import Header from './Header';
import Netflix_Background from "../assets/Netflix-Background.jpg";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";   
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const nameValue = name.current ? name.current.value : "";  // Safeguard against null
        const emailValue = email.current ? email.current.value : "";
        const passwordValue = password.current ? password.current.value : "";
        // Validate the form data
        const message = checkValidData(isSignInForm ? "" : nameValue, emailValue, passwordValue, isSignInForm);
        setErrorMessage(message);
        if(message) return; // if something message is their then return message otherwise go AHEAD. 

        //Sign In /Sign Up Logic
        if(!isSignInForm){
            // Sign Up Logic here
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)   // here i remove the "nameValue".
                .then((userCredential) => {
                const user = userCredential.user;

                // update profile func from firebase.
                updateProfile(user, {
                    displayName: nameValue, photoURL: "https://avatars.githubusercontent.com/u/161888039?v=4"
                  })
                    .then(() => {

                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                        // Goto Browse page
                        navigate("/browse");
                  })
                    .catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                  });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+ "-" +errorMessage)
            });
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
            });

        }

    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={Netflix_Background} alt='BackgroundImage' />
            </div>
            <form 
                onSubmit={(e) => e.preventDefault()} // Prevent page reload
                className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700'
                />

                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>  {/* Display error message */}

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now"
                        : "Already Registered? Sign In Now."}
                </p>
            </form>
        </div>
    );
};

export default Login;
