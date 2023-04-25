import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../pages/Layout.jsx'
import { fetchMovies } from '../services/movies.service.js'
export const useFetchMovies = () => {
  const language = useContext(LanguageContext)

  console.log('useFetchMovies', language)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchMovies(language)
      .then((data) => {
        setMovies(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language])
  return { loading, error, movies }
}
