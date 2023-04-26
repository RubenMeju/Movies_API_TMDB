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
  console.log('data', data)
  const title = data?.title ? data?.title : data?.name
  return (
    <>
      {loading && <CircleProgress />}
      {error && <h1>Algo ha salido mal</h1>}

      <div className='w-full h-screen text-slate-100 lg:flex lg:justify-center lg:items-center'>
        <div className='flex flex-col bg-green-500'>
          <img src={URL_IMAGE + data?.poster_path} alt={title} />
        </div>

        <div className='w-4/5 m-auto lg:p-10'>
          <h2 className='text-4xl text-center p-4'>{title}</h2>

          <div className='pt-4 text-xl'>
            {data?.budget && (
              <div className='flex'>
                <p className='text-slate-300 pr-2'>Presupuesto:</p>
                <p>{data?.budget.toLocaleString('es-ES')} $</p>
              </div>
            )}

            <div className='flex'>
              <p className='text-slate-300 pr-2'>V.O:</p>
              <p> {data?.original_language}</p>
            </div>

            {data?.number_of_episodes && data?.number_of_seasons && (
              <>
                <div className='flex'>
                  <p className='text-slate-300 pr-2'>Temporadas:</p>
                  <p>{data?.number_of_seasons}</p>
                </div>

                <div className='flex'>
                  <p className='text-slate-300 pr-2'>Numero de episodios</p>
                  <p>{data?.number_of_episodes}</p>
                </div>
              </>
            )}
          </div>

          <p className='text-2xl text-center p-4'>Sipnosis</p>
          <p className=' text-xl'>{data?.overview}</p>
        </div>
      </div>
    </>
  )
}