import { Link } from 'react-router-dom'
import CircleProgress from '../utils/CircleProgress'
import { orderDate } from '../utils/orderDate'
import Loader from './loader/Loader'
import { URL_IMAGE } from '../const'

export default function Card({ loading, error, data, paramUrl }) {
  return (
    <>
      {error && <h1>Algo ha salido mal</h1>}

      {loading ? (
        <Loader />
      ) : (
        <>
          {data?.results.map((item) => (
            // card

            <Link
              to={paramUrl + item.id}
              key={item.id}
              className={`w-4/5 max-w-xs h-[400px] mt-10 ml-2 rounded-md border-4 relative cursor-pointer ${
                item.vote_average * 10 > 70
                  ? 'border-green-600'
                  : item.vote_average * 10 > 40
                  ? 'border-yellow-600'
                  : 'border-red-600'
              }`}
            >
              <div className='w-12 h-12 absolute top-[-20px] right-[-20px] z-10'>
                <CircleProgress value={item.vote_average * 10} />
              </div>
              {/* 80% */}
              <div className='h-4/5'>
                <img
                  src={URL_IMAGE + item.poster_path}
                  alt={item.title}
                  className='object-cover w-full h-full object-top'
                />
              </div>
              {/* 20% */}
              <div className=' h-1/5 pl-2 pr-2 bg-slate-200 flex flex-col justify-around'>
                <h2 className='text-2xl text-center leading-6'>
                  {item.title ? item.title : item.name}
                </h2>

                <div className='flex justify-around'>
                  <p>
                    {orderDate(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date
                    )}
                  </p>
                  <p>V.O: {item.original_language.toUpperCase()}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  )
}
