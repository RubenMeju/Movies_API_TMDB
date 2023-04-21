import { useEffect, useState } from 'react'
import { getMovies } from '../services/service'

export default function useMovies() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState()
  useEffect(() => {
    console.log('useEffect')
    getMovies().then((res) => {
      setMovies(res)
      setLoading(true)
    })
  }, [])
  return { loading, setLoading, movies, setMovies }
}
