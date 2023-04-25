import { Link, useLocation } from 'react-router-dom'
import ChangeLanguage from './ChangeLanguage'

export default function NavLinks({ isOpen, setLanguage }) {
  const location = useLocation()
  console.log('location:', location.pathname)

  // una lista con los items 'Movies, TV, Characters' y subitems 'Popular, Top Rated, Upcoming, Now Playing'
  const links = [
    {
      name: 'Películas',
      path: '/',
      categories: [
        {
          name: 'Top Rated',
          path: '/top-rated'
        },
        {
          name: 'Upcoming',
          path: '/upcoming'
        },
        {
          name: 'Now Playing',
          path: '/now-playing'
        }
      ]
    },
    {
      name: 'Televisión',
      path: 'tv',
      categories: [
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
      <ul className='flex flex-col lg:flex-row lg:gap-8'>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.path}> {link.name} </Link>
            <ul className='flex flex-col bg-green-500'>
              {link.categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={`${link.path}${category.path}`}
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
