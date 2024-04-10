import React, { useEffect, useState } from 'react';
import chefImage from './assets/chef.jpg';
import Glogo from './assets/glogo.png';
import { auth, provider } from './firebase.config';
import { signInWithPopup } from 'firebase/auth';
import App from './App.jsx';

function SignIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        setIsSignedIn(true); // Set isSignedIn to true after successful sign-in
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  // Render the appropriate component based on isSignedIn state
  if (isSignedIn) {
    return <App />;
  }

  // Render the SignIn component
  return (
    <div className='mt-10 flex bg-white w-full h-screen'>
      {/* Left side */}
      <div className='bg-black w-1/3'>
        <img className='w-full h-lvh' src={chefImage} alt="" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col justify-center'>
        {/* Form Container */}
        <div className='flex flex-col gap-4 items-center m-40 w-1/2'>
          <h1 className='text-black text-3xl'>Sign In</h1>
          <input className='border border-gray-300 w-full rounded-md' type="text" placeholder='example@email.com' />
          <input className='border border-gray-300 w-full rounded-md' type="text" placeholder='password' />
          <button className='bg-blue-500 w-full rounded-md text-white'>Sign In</button>
          <button
            onClick={handleClick}
            className='w-full bg-zinc-300 border border-black rounded-md text-black shadow-black flex items-center justify-center gap-2'
          >
            <img src={Glogo} alt="Google Logo" className='w-3 h-3' />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;