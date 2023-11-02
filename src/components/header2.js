import React from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header2 = () => {

    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignout = () => {
        //console.log("helo");
        signOut(auth)
        .then(() => {
            navigate("/");
        })
        .catch((error) => {
            navigate("/error");
        });
    }

  return (
      <div className='px-8 w-full py-2 absolute bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-40'
        src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo" />
      <div className='flex'>
        <img className='w-12 h-12 mt-2 p-1' alt = "userlogo" src = {user?.photoURL}/>
        <button className='font-bold text-white' onClick={handleSignout}> Sign out</button>
      </div>
      </div>
  )
}

export default Header2;
