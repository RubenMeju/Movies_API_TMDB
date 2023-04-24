import { Link, useLocation } from 'react-router-dom'

export default function NavLinks({ isOpen }) {
  const location = useLocation()
  console.log('location:', location.pathname)
  const links = [
    {
      name: 'Películas',
      path: '/'
    },
    {
      name: 'Televisión',
      path: 'tv'
    },
    {
      name: 'Personajes',
      path: 'personajes'
    }
  ]
  return (
    <div
      className={`fixed w-full h-full top-16 transition-all duration-500 z-50 lg:static lg:w-auto lg:flex lg:items-center ${
        isOpen ? 'left-0' : 'left-[-100%]'
      } `}
    >
      <ul className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
        {links.map((link) => (
          <li key={link.name} className='text-slate-100 text-2xl'>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/*
export default function NavLinks() {
  const location = useLocation()
  console.log('location:', location.pathname)
  return (
    <ul className='links'>
      <Link
        to='/'
        className={` links link ${
          location.pathname === '/' ? 'itemActive' : null
        } `}
      >
        Películas
      </Link>
      <Link
        to='/tv'
        className={` links link ${
          location.pathname === '/tv' ? 'itemActive' : null
        } `}
      >
        Televisión
      </Link>

      <Link
        to='/characters'
        className={` links link ${
          location.pathname === '/characters' ? 'itemActive' : null
        } `}
      >
        Personajes
      </Link>
    </ul>
  )
}
*/
