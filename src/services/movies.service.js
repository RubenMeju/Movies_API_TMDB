import { URL_API } from '../const'
const URL_MOVIES_POPULAR = 'movie/'

export const fetchMovies = async (
  language = 'es',
  category = 'popular',
  page = '1'
) => {
  console.log('api env impòrt', import.meta.env.VITE_API_KEY)
  console.log('api env process', process.env.VITE_API_KEY)
  const res = await fetch(
    URL_API +
      URL_MOVIES_POPULAR +
      category +
      import.meta.env.VITE_API_KEY +
      '&language=' +
      language +
      '&page=' +
      page
  )
  const data = await res.json()
  return data
}
