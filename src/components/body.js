import React from 'react'
import Browse from './browse'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClickResult from './ClickResult'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browser',
            element: <Browse />
        },
        {
          path: '/Result',
          element: <ClickResult />
        }
    ])

    // console.log("maal");
    // console.log(process.env.REACT_APP_TMDB_KEY);
    // console.log(process.env.REACT_APP_OPENAI_KEY);
  return (
    <div className=''>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body
