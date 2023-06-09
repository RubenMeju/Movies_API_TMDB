import { URL_API } from '../const'

export const fetchDetailsByID = async (language = 'es', pathAction, id = 1) => {
  const res = await fetch(
    URL_API +
      pathAction +
      id +
      import.meta.env.VITE_API_KEY +
      '&language=' +
      language
  )
  const data = await res.json()
  return data
}
