import { API_KEY, PAGE } from '../const'

const URL_API_TV = 'https://api.themoviedb.org/3/tv/popular?api_key='

export const fetchTV = async (language = 'es') => {
  console.log('fetchTV service:', language)
  const res = await fetch(
    URL_API_TV + API_KEY + '&language=' + language + '&page=' + PAGE
  )
  const data = await res.json()
  return data
}
