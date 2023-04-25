import { API_KEY, PAGE } from '../const'
const URL_API = 'https://api.themoviedb.org/3/'
const URL_TV_POPULAR = 'tv/'

export const fetchTV = async (language = 'es', category = 'popular') => {
  const res = await fetch(
    URL_API +
      URL_TV_POPULAR +
      category +
      API_KEY +
      '&language=' +
      language +
      '&page=' +
      PAGE
  )
  const data = await res.json()
  return data
}