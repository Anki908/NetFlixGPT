import React from 'react'
import Browse from './browse'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const body = () => {
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
    <div>
      <RouterProvider router = {appRouter} />
    </div>
  )
}

export default body
