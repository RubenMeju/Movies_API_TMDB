import { API_KEY, URL_API } from '../const'

const URL_TV_POPULAR = 'tv/'

export const fetchTV = async (
  language = 'es',
  category = 'popular',
  page = 1
) => {
  const res = await fetch(
    URL_API +
      URL_TV_POPULAR +
      category +
      API_KEY +
      '&language=' +
      language +
      '&page=' +
      page
  )
  const data = await res.json()
  return data
}
