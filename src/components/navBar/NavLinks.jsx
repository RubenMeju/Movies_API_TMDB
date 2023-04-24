import { Link, useLocation } from 'react-router-dom'

export default function NavLinks() {
  const location = useLocation()
  console.log('location:', location.pathname)
  return (
    <div className='links'>
      <Link
        to='/'
        className={` links link ${
          location.pathname === '/' ? 'itemActive' : null
        } `}
      >
        Home
      </Link>
      <Link
        to='/tv'
        className={` links link ${
          location.pathname === '/tv' ? 'itemActive' : null
        } `}
      >
        Televisión
      </Link>
    </div>
  )
}
