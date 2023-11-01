import React, { useState , useRef} from 'react'
import Header from './header'
import {Validate} from '../utils/Validate'

const Login = () => {

  const [isSignIn , setSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg , setErrorMsg] = useState(null);

  const HandleButton = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const msg = Validate(email.current.value , password.current.value);
    setErrorMsg(msg);
  }

  const toggleSign = () => {
    setSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
          type = "text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        <input
          ref = {email}
          type = "text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input 
          ref = {password}
          type = "password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={HandleButton}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className='cursor-pointer' onClick={toggleSign}>{ isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
