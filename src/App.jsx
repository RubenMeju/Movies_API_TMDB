import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='bg-blue-600'>
        <h1 className='text-3xl text-center font-bold  text-white'>
          Popular Movies!
        </h1>
        <div className=''>
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
