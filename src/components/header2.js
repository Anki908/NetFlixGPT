import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleSearchGpt } from '../utils/GptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header2 = () => {

    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignout = () => {
        //console.log("helo");
        signOut(auth)
        .then(() => {
        })
        .catch((error) => {
            navigate("/error");
        });
    }

    const handleToggleButton = () => {
      dispatch(toggleSearchGpt())
    }

  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName , photoURL} = user;
        dispatch(addUser({ uid:uid , email:email , displayName: displayName , photoURL: photoURL}));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => subscribe();
  } ,[])

  const HandlelangChange = (e) => {
    //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  const Showgpt = useSelector((store) => store.gpt.showGptSearch);

  return (
      <div className='px-8 w-full py-2 absolute bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-40'
        src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo" />
      <div className='flex'>
        {Showgpt && <select className='p-2 m-3 bg-gray-900 text-white rounded-lg' onChange={HandlelangChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>}
        <button onClick={handleToggleButton} className='py-2 px-4 mx-4 my-3 bg-red-800 text-white rounded-lg'>{Showgpt ? "Home Page" : "GPT Search"}</button>
        <img className='w-12 h-12 mt-2 p-1' alt = "userlogo" src = {user?.photoURL}/>
        <button className='font-bold text-white' onClick={handleSignout}> Sign out</button>
      </div>
      </div>
  )
}

export default Header2;
