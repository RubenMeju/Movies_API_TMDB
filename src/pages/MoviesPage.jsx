import React, { useState } from 'react'
import Paginator from '../components/Paginator'
import Card from '../components/Card'

export default function MoviesPage() {
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

        <Paginator />
      </div>
    </>
  )
}
