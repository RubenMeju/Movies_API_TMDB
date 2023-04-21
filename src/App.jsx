import './App.css'
import movies from './mockup.json'
import CircleProgress from './utils/CircleProgress'

function App() {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/'
  return (
    <>
      <div className='bg-blue-600'>
        <h1 className='text-3xl text-center font-bold  text-white'>
          Popular Movies!
        </h1>
        <div className=''>
          {movies.results.map((movie) => (
            // card
            <div
              key={movie.id}
              className=' w-4/5 m-auto mt-10 overflow-hidden rounded-md'
            >
              <div className=''>
                <img src={URL_IMAGE + movie.poster_path} alt={movie.title} />
              </div>

              <div className=' bg-slate-200 '>
                <h2 className='text-2xl text-center pt-2'>{movie.title}</h2>
                <div className='flex justify-between p-4'>
                  <p>{movie.vote_average}</p>
                  <p>{movie.release_date}</p>
                  <div className='w-20 h-20'>
                    <CircleProgress value={movie.vote_average} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
