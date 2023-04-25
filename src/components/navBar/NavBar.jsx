// import './navbar.css'
import { useState } from 'react'
import BtnBars from './BtnBars'
import NavLinks from './NavLinks'

export default function NavBar({ setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed w-full h-16 bg-blue-800 z-50'>
      <div className='container m-auto h-full pl-4 pr-4 flex justify-between items-center'>
        <h1 className='text-4xl text-slate-100'>Movies API</h1>

        <BtnBars isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavLinks
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setLanguage={setLanguage}
        />
      </div>
    </nav>
  )
}
