import React, { useEffect } from 'react'
import Browse from './browse'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browser',
            element: <Browse />
        }
    ])

  return (
    <div className=''>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default Body
