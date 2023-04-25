import Paginator from '../components/Paginator'
import Card from '../components/Card'
import { useFetchMovies } from '../hooks/useFetchMovies'

export default function MoviesPage() {
  const { loading, error, movies } = useFetchMovies()
  return (
    <>
      <h1 className='text-3xl text-center font-bold  text-white'>
        Popular Movies!
      </h1>
      <div className='md: flex flex-wrap justify-between '>
        <Card loading={loading} error={error} data={movies} />
      </div>
      <Paginator />
    </>
  )
}
