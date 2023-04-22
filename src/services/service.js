const URL_API =
  'https://api.themoviedb.org/3/movie/popular?api_key=4c9a1af55fbb682840a464707f7099f0&language=es-ES&page=1'

export const fetchMovies = async () => {
  const res = await fetch(URL_API)
  const data = await res.json()
  return data
}
