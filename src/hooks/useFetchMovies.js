import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/service'

export const useFetchMovies = (language) => {
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
