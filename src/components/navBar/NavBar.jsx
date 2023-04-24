// import './navbar.css'
import { useState } from 'react'
import BtnBars from './BtnBars'
import NavLinks from './NavLinks'
import ChangeLanguage from './ChangeLanguage'

export default function NavBar({ setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='w-full h-16 bg-blue-800 flex justify-around items-center'>
      <h1 className='text-4xl text-slate-100'>Movies API</h1>

      <BtnBars isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavLinks isOpen={isOpen} />

      <ChangeLanguage setLanguage={setLanguage} />
    </nav>
  )
}
