const URL_API_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key='
const URL_API_TV = 'https://api.themoviedb.org/3/tv/popular?api_key='

const API_KEY = '4c9a1af55fbb682840a464707f7099f0'
const PAGE = 1

export const fetchMovies = async (language = 'es') => {
  console.log('fetchMovies service:', language)
  const res = await fetch(
    URL_API_MOVIES + API_KEY + '&language=' + language + '&page=' + PAGE
  )
  const data = await res.json()
  return data
}

export const fetchTV = async (language = 'es') => {
  console.log('fetchTV service:', language)
  const res = await fetch(
    URL_API_TV + API_KEY + '&language=' + language + '&page=' + PAGE
  )
  const data = await res.json()
  return data
}
