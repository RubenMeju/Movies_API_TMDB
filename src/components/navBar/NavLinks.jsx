import { Link, useLocation } from 'react-router-dom'
import ChangeLanguage from './ChangeLanguage'

export default function NavLinks({ isOpen, setLanguage }) {
  const location = useLocation()
  console.log('location:', location.pathname)
  // una lista con los items 'Movies, TV, Characters' y subitems 'Popular, Top Rated, Upcoming, Now Playing'
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
          path: 'movies/now-playing'
        },

        {
          name: 'Proximanente',
          path: 'movies/upcoming'
        },
        {
          name: 'Mejor valoradas',
          path: '/movies/top-rated'
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
          name: 'Top Rated',

          path: '/top-rated'
        },
        {
          name: 'On TV',
          path: '/on-tv'
        },
        {
          name: 'Airing Today',
          path: '/airing-today'
        }
      ]
    },
    {
      name: 'Personajes',
      path: 'personajes',
      categories: [
        {
          name: 'Popular',
          path: '/popular'
        }
      ]
    }
  ]

  return (
    <div
      className={`fixed w-full h-full top-16 transition-all duration-500 z-50 bg-orange-500
      lg:static lg:w-auto lg:flex lg:items-center lg:bg-transparent ${
        isOpen ? 'left-0' : 'left-[-100%]'
      } `}
    >
      <ul className='flex flex-col gap-2 p-4 lg:flex-row lg:gap-8 '>
        {links.map((link) => (
          <li
            key={link.name}
            className='group text-slate-100 text-3xl cursor-pointer p-4'
          >
            {link.name}
            <ul className=' bg-red-400 hidden group-hover:block lg:absolute lg:top-16'>
              {link.categories.map((category, index) => (
                <li
                  key={index}
                  className='text-xl p-4 text-gray-300 odd:bg-violet-400 even:bg-green-700'
                >
                  <Link
                    to={category.path}
                    className={`${
                      location.pathname === `${link.path}${category.path}`
                        ? 'text-green-500'
                        : 'text-white'
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ChangeLanguage setLanguage={setLanguage} />
    </div>
  )
}
