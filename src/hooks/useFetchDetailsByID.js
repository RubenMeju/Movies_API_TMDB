import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../pages/Layout.jsx'
import { fetchMovieDetailsByID } from '../services/detailsById.service.js'

export const useFetchDetailsByID = (id) => {
  const language = useContext(LanguageContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movie, setMovie] = useState(null)

  console.log('usehook el id es: ', id)

  useEffect(() => {
    setLoading(true)
    fetchMovieDetailsByID(language, id)
      .then((data) => {
        setMovie(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language, id])
  return { loading, error, movie }
}
