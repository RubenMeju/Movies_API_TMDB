import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../pages/Layout.jsx'
import { fetchDetailsByID } from '../services/detailsById.service.js'

export const useFetchDetailsByID = (pathAction, id) => {
  const language = useContext(LanguageContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchDetailsByID(language, pathAction, id)
      .then((data) => {
        setData(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language, id])
  return { loading, error, data }
}
