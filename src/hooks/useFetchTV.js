import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../pages/Layout.jsx'
import { fetchTV } from '../services/tv.service.js'
export const useFetchTV = () => {
  const language = useContext(LanguageContext)

  console.log('useFetchTV', language)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [tv, setTV] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchTV(language)
      .then((data) => {
        setTV(data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [language])
  return { loading, error, tv }
}
