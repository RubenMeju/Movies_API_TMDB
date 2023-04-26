import { useParams, useLocation } from 'react-router-dom'
import { useFetchDetailsByID } from '../hooks/useFetchDetailsByID'
import CircleProgress from '../utils/CircleProgress'
import { URL_IMAGE } from '../const'

export default function DetailsByIdPage() {
  const location = useLocation()
  const pathAction = '/' + location.pathname.split('/')[1] + '/'

  const params = useParams()
  const id = params.id

  const { loading, error, data } = useFetchDetailsByID(pathAction, id)
  return (
    <>
      {loading && <CircleProgress />}
      {error && <h1>Algo ha salido mal</h1>}

      <div className='text-slate-100'>
        <h2 className='text-4xl text-center p-4'>{data?.title}</h2>
        <img src={URL_IMAGE + data?.poster_path} alt={data?.title} />

        <p>Presupuesto:</p>
        <p>{data?.budget} $</p>

        <p>V.O: {data?.original_language}</p>

        <p className='text-2xl text-center p-4'>Sipnosis</p>
        <p className='w-4/5 m-auto'>{data?.overview}</p>
      </div>
    </>
  )
}
