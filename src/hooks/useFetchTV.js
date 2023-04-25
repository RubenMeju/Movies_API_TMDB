import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../pages/Layout.jsx'
import { fetchTV } from '../services/tv.service.js'
import { useLocation } from 'react-router-dom'
export const useFetchTV = () => {
  const language = useContext(LanguageContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [tv, setTV] = useState(null)

  const location = useLocation()
  const category = location.pathname.split('/')[2]

  useEffect(() => {
    setLoading(true)
    fetchTV(language, category)
      .then((data) => {
        setTV(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language, category])
  return { loading, error, tv }
}
