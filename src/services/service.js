const URL_API =
  'https://api.themoviedb.org/3/movie/popular?api_key=4c9a1af55fbb682840a464707f7099f0'

export const getMovies = () => {
  return fetch(URL_API)
    .then((response) => response.json())
    .then((data) => data)
}
