import React from 'react'
import lang from "../utils/languageContants"
import { useSelector } from 'react-redux'

const GptBarSearch = () => {

    const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
        <div className='absolute -z-10'>
            <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
        </div>
        <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type = "text" className='p-2 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-800 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
        </div>
    </div>
  )
}

export default GptBarSearch
