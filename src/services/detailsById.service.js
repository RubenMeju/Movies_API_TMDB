import { API_KEY } from '../const'
const URL_API = 'https://api.themoviedb.org/3/'
const URL_MOVIES_POPULAR = 'movie/'

export const fetchMovieDetailsByID = async (language = 'es', id = 1) => {
  console.log('fetchMovieDetailsByID: ', id)
  const res = await fetch(
    URL_API + URL_MOVIES_POPULAR + id + API_KEY + '&language=' + language
  )
  const data = await res.json()
  return data
}
