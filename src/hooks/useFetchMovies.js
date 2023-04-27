import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movies.service.js'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const useFetchMovies = () => {
  const { i18n } = useTranslation()
  const language = i18n.languages[0]
  // console.log('meju language: ', language)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)

  const location = useLocation()
  const category = location.pathname.split('/')[2]
  // mirar de mandar data.results directamente
  useEffect(() => {
    setLoading(true)
    fetchMovies(language, category, page)
      .then((data) => {
        setMovies(data)
        console.log('meju page: ', data?.page)
        // setPage(Number(data?.page))
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language, category, page])
  return { loading, error, movies, page, setPage }
}
