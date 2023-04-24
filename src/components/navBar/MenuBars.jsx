import { useState } from 'react'
import iconBars from '../../assets/iconBars.svg'
import NavLinks from './NavLinks'

export default function MenuBars() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          console.log(isOpen)
          setIsOpen(!isOpen)
        }}
      >
        <img src={iconBars} alt='' className='w-12 h-12' />
      </button>

      <div
        className={`fixed w-full h-full top-16 transition-all duration-500 bg-orange-400 z-50 ${
          isOpen ? 'left-0' : 'left-[-100%]'
        } `}
      >
        MenuBars
        <NavLinks />
      </div>
    </>
  )
}
