import { useFetchMovies } from '../hooks/useFetchMovies'
import CircleProgress from '../utils/CircleProgress'
import { orderDate } from '../utils/orderDate'
import Loader from './loader/Loader'

// 'https://api.themoviedb.org/3/movie/popular?api_key=1c1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b&language=es-ES&page=1'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export default function Card(language) {
  console.log('language card: ', language)
  const { loading, error, movies } = useFetchMovies(language)

  return (
    <>
      {loading && <Loader />}
      {error && <h1>Algo ha salido mal</h1>}
      {movies?.results.map((movie) => (
        // card
        <div
          key={movie.id}
          className={`w-4/5 max-w-xs h-[400px] m-auto mt-10 rounded-md border-4 relative ${
            movie.vote_average * 10 > 70
              ? 'border-green-600'
              : movie.vote_average * 10 > 40
              ? 'border-yellow-600'
              : 'border-red-600'
          }`}
        >
          <div className='w-12 h-12 absolute top-[-20px] right-[-20px] z-10'>
            <CircleProgress value={movie.vote_average * 10} />
          </div>
          {/* 80% */}
          <div className='h-4/5'>
            <img
              src={URL_IMAGE + movie.poster_path}
              alt={movie.title}
              className='object-cover w-full h-full object-top'
            />
          </div>
          {/* 20% */}
          <div className=' h-1/5 pl-2 pr-2 bg-slate-200 flex flex-col justify-around'>
            <h2 className='text-2xl text-center leading-6'>{movie.title}</h2>

            <div className='flex justify-around'>
              <p>{orderDate(movie.release_date)}</p>
              <p>V.O: {movie.original_language.toUpperCase()}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
