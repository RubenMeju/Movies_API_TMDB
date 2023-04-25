import { API_KEY, PAGE } from '../const'

const URL_API_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key='

export const fetchMovies = async (language = 'es') => {
  console.log('fetchMovies service:', language)
  const res = await fetch(
    URL_API_MOVIES + API_KEY + '&language=' + language + '&page=' + PAGE
  )
  const data = await res.json()
  return data
}
