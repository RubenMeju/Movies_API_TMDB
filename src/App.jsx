import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <div id='LAYOUT' className='container m-auto'>
        <h1 className='text-3xl text-center font-bold  text-white'>
          Popular Movies!
        </h1>
        <div className='md: flex flex-wrap justify-between '>
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
