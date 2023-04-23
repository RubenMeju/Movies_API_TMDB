import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [language, setLanguage] = useState('es')
  return (
    <>
      <div id='LAYOUT' className='container m-auto'>
        <button
          type='button'
          className='bg-gray-300 h-20'
          onClick={() => {
            language === 'es' ? setLanguage('en') : setLanguage('es')
          }}
        >
          {language === 'es' ? 'Español' : 'English'}
        </button>
        <h1 className='text-3xl text-center font-bold  text-white'>
          Popular Movies!
        </h1>
        <div className='md: flex flex-wrap justify-between '>
          <Card language={language} />
        </div>
      </div>
    </>
  )
}

export default App
