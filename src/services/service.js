const URL_API = 'https://api.themoviedb.org/3/movie/popular?api_key='

const API_KEY = '4c9a1af55fbb682840a464707f7099f0'
const PAGE = 1

export const fetchMovies = async (language = 'es') => {
  console.log('fetchMovies service:', language)
  const res = await fetch(
    URL_API + API_KEY + '&language=' + language.language + '&page=' + PAGE
  )
  const data = await res.json()
  return data
}
