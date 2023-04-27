import { useParams, useLocation } from 'react-router-dom'
import { useFetchDetailsByID } from '../hooks/useFetchDetailsByID'
import { URL_IMAGE } from '../const'
import Loader from '../components/loader/Loader'
import { orderDate } from '../utils/orderDate'

export default function DetailsByIdPage() {
  const location = useLocation()
  const pathAction = '/' + location.pathname.split('/')[1] + '/'

  const params = useParams()
  const id = params.id

  const { loading, error, data } = useFetchDetailsByID(pathAction, id)
  const title = data?.title ? data?.title : data?.name
  return (
    <>
      {error && <h1>Algo ha salido mal</h1>}
      {loading ? (
        <Loader />
      ) : (
        <div className='w-full h-screen max-w-lg m-auto text-slate-100 lg:flex lg:justify-center lg:items-center lg:max-w-4xl'>
          <div className='flex flex-col bg-green-500'>
            {data?.poster_path && (
              <img src={URL_IMAGE + data?.poster_path} alt={title} />
            )}
          </div>

          <div className='w-4/5 m-auto lg:p-10'>
            <h2 className='text-4xl text-center p-4'>{title}</h2>

            <div className='pt-4 pb-4 text-xl'>
              {data?.budget && (
                <div className='flex'>
                  <p className='text-slate-300 pr-2'>Presupuesto:</p>
                  <p>{data?.budget.toLocaleString('es-ES')} $</p>
                </div>
              )}

              <div className='flex'>
                {data?.release_date ||
                  (data?.first_air_date && (
                    <>
                      <p className='pr-2'>Fecha de estreno:</p>
                      <p>
                        {orderDate(
                          data?.release_date
                            ? data?.release_date
                            : data?.first_air_date
                        )}
                      </p>
                    </>
                  ))}
              </div>
              <p>V.O: {data?.original_language.toUpperCase()}</p>

              {data?.number_of_episodes && data?.number_of_seasons && (
                <>
                  <div className='flex'>
                    <p className='text-slate-300 pr-2'>Temporadas:</p>
                    <p>{data?.number_of_seasons}</p>
                  </div>

                  <div className='flex'>
                    <p className='text-slate-300 pr-2'>Numero de episodios:</p>
                    <p>{data?.number_of_episodes}</p>
                  </div>
                </>
              )}
            </div>

            {data?.overview && (
              <>
                <p className='text-center text-2xl'>Sipnosis</p>
                <p className='text-xl pt-4 pb-4'>{data?.overview}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
