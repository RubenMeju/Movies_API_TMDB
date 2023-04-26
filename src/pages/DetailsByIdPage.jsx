import { useParams } from 'react-router-dom'
import { useFetchDetailsByID } from '../hooks/useFetchDetailsByID'
import CircleProgress from '../utils/CircleProgress'

export default function DetailsByIdPage() {
  const params = useParams()
  const id = params.id
  const { loading, error, movie } = useFetchDetailsByID(id)
  console.log('el id es: ', id)
  console.log('details movie: ', movie)
  return (
    <>
      {loading && <CircleProgress />}
      {error && <h1>Algo ha salido mal</h1>}

      <div className='text-slate-100'>
        <h2 className='text-4xl text-center p-4'>{movie?.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />
        <p>Presupuesto:</p>
        <p>{movie?.budget} $</p>

        <p>V.O: {movie?.original_language.toUpperCase()}</p>

        <p className='text-2xl text-center p-4'>Sipnosis</p>
        <p className='w-4/5 m-auto'>{movie?.overview}</p>
      </div>
    </>
  )
}
