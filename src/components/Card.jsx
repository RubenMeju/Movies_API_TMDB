import { useFetchMovies } from '../hooks/useFetchMovies'
import CircleProgress from '../utils/CircleProgress'
import { orderDate } from '../utils/orderDate'
import Loader from './loader/Loader'

// 'https://api.themoviedb.org/3/movie/popular?api_key=1c1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b&language=es-ES&page=1'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export default function Card() {
  const { loading, error, movies } = useFetchMovies()

  return (
    <>
      {loading && <Loader />}
      {error && <h1>Algo ha salido mal</h1>}
      {movies?.results.map((movie) => (
        // card
        <div
          key={movie.id}
          className=' w-4/5 m-auto mt-10 overflow-hidden rounded-md'
        >
          <div className='relative'>
            <img src={URL_IMAGE + movie.poster_path} alt={movie.title} />
            <div className='w-10 h-10 absolute left-3 bottom-[-1.2rem]'>
              <CircleProgress value={movie.vote_average * 10} />
            </div>
          </div>

          <div className=' bg-slate-200 '>
            <h2 className='text-2xl text-center pt-4'>{movie.title}</h2>

            <div className='p-2 flex justify-around'>
              <p>{orderDate(movie.release_date)}</p>
              <p>V.O: {movie.original_language.toUpperCase()}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
