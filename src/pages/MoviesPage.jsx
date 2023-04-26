import BtnMoreData from '../components/BtnMoreData'
import Card from '../components/Card'
import { useFetchMovies } from '../hooks/useFetchMovies'
import { useLocation } from 'react-router-dom'

export default function MoviesPage() {
  const { loading, error, movies, page, setPage } = useFetchMovies()
  const { pathname } = useLocation()

  console.log('fdsfds  ', page)

  return (
    <>
      <h1 className='pt-8 text-3xl text-center font-bold  text-slate-100'>
        {pathname === '/' && 'Películas populares'}
        {pathname === '/movies/now_playing' && 'En cartelera hoy'}
        {pathname === '/movies/upcoming' && 'Proximanente'}
        {pathname === '/movies/top_rated' && 'Mejor valoradas'}
      </h1>
      <div className='md: flex flex-wrap justify-between '>
        <Card
          loading={loading}
          error={error}
          data={movies}
          paramUrl='/movie/'
        />
      </div>
      <BtnMoreData page={page} setPage={setPage} />
    </>
  )
}
