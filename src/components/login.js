import React, { useState , useRef} from 'react'
import Header from './header'
import {Validate} from '../utils/Validate'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const dispatch = useDispatch();
  const [isSignIn , setSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg , setErrorMsg] = useState(null);

  const HandleButton = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const msg = Validate(email.current.value , password.current.value);

    msg === "Password is Not Valid" ? setErrorMsg("Password is Not Valid Your Password must contain both uppercase and lowercase letters ,special characters and numbers."): setErrorMsg(msg);

    if(msg) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth , email.current.value , password.current.value,)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        updateProfile(user , {
          displayName: name.current.value ,
          photoURL: "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
        })
        .then(() => {
          const {uid , email, displayName , photoURL} = auth.currentUser;
          dispatch(addUser({ uid:uid , email:email , displayName: displayName , photoURL: photoURL}))
        })
        .catch((error) => {
          setErrorMsg();
        });
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMsg( errorMessage);
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed in 
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        errorMessage = "Password is Not Valid" ? setErrorMsg("Password is Not Valid Your Password must contain both uppercase and lowercase letters ,special characters and numbers.") : setErrorMsg(errorMessage);
        //console.log(errorMsg)
      });
    }
  }

  const toggleSign = () => {
    setSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className='fixed'>
        <img className='h-screen md:h-[100%] object-cover' src = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=' w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
          ref = {name}
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
