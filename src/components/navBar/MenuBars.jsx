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

      {isOpen ? (
        <div className='fixed w-full h-full top-16 bg-orange-400 z-50'>
          MenuBars
          <NavLinks />
        </div>
      ) : null}
    </>
  )
}
