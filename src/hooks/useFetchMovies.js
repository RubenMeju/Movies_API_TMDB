import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/service'

export const useFetchMovies = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(null)

  const getMovies = async () => {
    setError(false)
    setLoading(true)
    fetchMovies()
      .then((data) => setMovies(data))
      .catch(() => setError(true))
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])
  return { loading, error, movies }
}
