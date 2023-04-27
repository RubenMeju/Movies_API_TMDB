import { useEffect, useState } from 'react'
import { fetchDetailsByID } from '../services/detailsById.service.js'
import { useTranslation } from 'react-i18next'

export const useFetchDetailsByID = (pathAction, id) => {
  const { i18n } = useTranslation()
  const language = i18n.languages[0]

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
