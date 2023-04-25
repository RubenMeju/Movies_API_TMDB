import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../pages/Layout.jsx'
import { fetchMovies } from '../services/movies.service.js'
import { useLocation } from 'react-router-dom'
export const useFetchMovies = () => {
  const language = useContext(LanguageContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(null)

  const location = useLocation()
  const category = location.pathname.split('/')[2]

  useEffect(() => {
    setLoading(true)
    fetchMovies(language, category)
      .then((data) => {
        setMovies(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language, category])
  return { loading, error, movies }
}
