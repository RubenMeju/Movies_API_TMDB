import { Link, useLocation } from 'react-router-dom'
import ChangeLanguage from './ChangeLanguage'

export default function NavLinks({ isOpen, setIsOpen, setLanguage }) {
  const location = useLocation()
  console.log('my location', location.pathname)
  const links = [
    {
      name: 'Películas',
      categories: [
        {
          name: 'Popular',
          path: '/'
        },
        {
          name: 'En cartelera hoy',
          path: '/movies/now_playing'
        },

        {
          name: 'Proximanente',
          path: '/movies/upcoming'
        },
        {
          name: 'Mejor valoradas',
          path: '/movies/top_rated'
        }
      ]
    },
    {
      name: 'Televisión',
      categories: [
        {
          name: 'Popular',
          path: '/tv'
        },
        {
          name: 'Se emite hoy',
          path: '/tv/airing_today'
        },
        {
          name: 'En televisión',
          path: '/tv/on_the_air'
        },
        {
          name: 'Mejor valoradas',
          path: '/tv/top_rated'
        }
      ]
    }
  ]

  return (
    <div
      className={`fixed w-full h-full top-16 transition-all duration-500 z-50 bg-blue-800
      lg:static lg:w-auto lg:flex lg:items-center lg:bg-transparent ${
        isOpen ? 'left-0' : 'left-[-100%]'
      } `}
    >
      <ul className='flex flex-col gap-2 p-4 lg:flex-row  '>
        {links.map((link) => (
          <li
            key={link.name}
            className='group text-slate-100 text-3xl cursor-pointer p-4'
          >
            {link.name}
            <ul className=' hidden group-hover:block lg:absolute top-16'>
              {link.categories.map((category, index) => (
                <Link
                  to={category.path}
                  key={index}
                  className={
                    location.pathname === category.path
                      ? 'text-green-400'
                      : 'text-slate-100'
                  }
                >
                  <li
                    className='text-xl p-2  lg:p-4 bg-blue-800 hover:bg-blue-500'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    {category.name}
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ChangeLanguage setLanguage={setLanguage} />
    </div>
  )
}
