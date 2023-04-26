import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Loader from './components/loader/Loader.jsx'
import Layout from './pages/Layout'
import MoviesPage from './pages/MoviesPage'
import TvPage from './pages/TvPage'
import ErrorPage from './pages/ErrorPage'
import DetailsByIdPage from './pages/DetailsByIdPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MoviesPage />
      },
      {
        path: '/movie/:id',
        element: <DetailsByIdPage />
      },
      {
        path: '/movies/:category',
        element: <MoviesPage />
      },
      {
        path: '/tv/',
        element: <TvPage />
      },
      {
        path: '/tv/top_rated',
        element: <TvPage />
      },
      {
        path: '/tv/on_the_air',
        element: <TvPage />
      },
      {
        path: '/tv/airing_today',
        element: <TvPage />
      },
      {
        path: '/tv/:id',
        element: <DetailsByIdPage />
      },
      {
        path: '/tv/:category',
        element: <TvPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} fallbackElement={<Loader />} />
)
