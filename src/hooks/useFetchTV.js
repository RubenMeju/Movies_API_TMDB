import { useEffect, useState } from 'react'
import { fetchTV } from '../services/tv.service.js'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const useFetchTV = () => {
  const { i18n } = useTranslation()
  const language = i18n.languages[0]

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [tv, setTV] = useState(null)
  const [page, setPage] = useState(1)

  const location = useLocation()
  const category = location.pathname.split('/')[2]

  useEffect(() => {
    setLoading(true)
    fetchTV(language, category, page)
      .then((data) => {
        setTV(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language, category, page])
  return { loading, error, tv, page, setPage }
}
