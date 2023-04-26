import BtnMoreData from '../components/BtnMoreData'
import Card from '../components/Card'
import { useFetchMovies } from '../hooks/useFetchMovies'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function MoviesPage() {
  const { t } = useTranslation()
  const { loading, error, movies, page, setPage } = useFetchMovies()
  const { pathname } = useLocation()

  return (
    <>
      <h1 className='pt-8 text-3xl text-center font-bold  text-slate-100'>
        {pathname === '/' && t('moviesPopular')}
        {pathname === '/movies/now_playing' && t('moviesNowPlaying')}
        {pathname === '/movies/upcoming' && t('moviesUpcoming')}
        {pathname === '/movies/top_rated' && t('moviesTopRated')}
      </h1>

      <div className='flex flex-col items-center md:flex-row flex-wrap justify-around'>
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
