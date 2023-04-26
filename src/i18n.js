import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
      moviesPopular: 'Películas Populares',
      moviesNowPlaying: 'Películas en Cartelera',
      moviesUpcoming: 'Películas Próximamente',
      moviesTopRated: 'Películas Mejor Valoradas',

      tvPopular: 'Series Populares',
      tvAiringToday: 'Series en Emisión',
      tvOnTheAir: 'Series en el Aire',
      tvTopRated: 'Series Mejor Valoradas',

      // titles link pages
      linkMovies: 'Películas',
      linkTv: 'Series',
      // links movies
      linkMoviesNowPlaying: 'En cartelera hoy',
      linkMoviesUpcoming: 'Próximamente',
      linkMoviesTopRated: 'Mejor valoradas',
      // links tv
      linkTvAiringToday: 'Se emite hoy',
      linkTvOnTheAir: 'En televisión',
      linkTvTopRated: 'Mejor valoradas'
    }
  },
  en: {
    translation: {
      moviesPopular: 'Popular Movies',
      moviesNowPlaying: 'Movies Now Playing',
      moviesUpcoming: 'Upcoming Movies',
      moviesTopRated: 'Top Rated Movies',

      tvPopular: 'Popular TV Shows',
      tvAiringToday: 'TV Shows Airing Today',
      tvOnTheAir: 'TV Shows On The Air',
      tvTopRated: 'Top Rated TV Shows',

      // titles link pages
      linkMovies: 'Movies',
      linkTv: 'TV Shows',
      // links movies
      linkMoviesNowPlaying: 'Now Playing',
      linkMoviesUpcoming: 'Up comming',
      linkMoviesTopRated: 'Top rated',
      // links tv
      linkTvAiringToday: 'Airing Today',
      linkTvOnTheAir: 'On The Air',
      linkTvTopRated: 'Top Rated'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
