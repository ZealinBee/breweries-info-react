import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BreweryPage from './pages/BreweryPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "breweries",
        element: <BreweryPage />
      }
    ]

  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App