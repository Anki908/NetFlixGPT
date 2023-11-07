import React from 'react';
import GptBarSearch from "./gptBarSearch";
import GptSuggestion from "./gptSuggestion";


const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img className='h-screen md:h-[100%] object-cover' src = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt = "logo"/>
    </div>
    <div className=''>
      <GptBarSearch />
      <GptSuggestion />
    </div>
    </>
  )
}

export default GptSearch
