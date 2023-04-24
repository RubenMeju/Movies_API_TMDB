import { Routes, Route } from 'react-router-dom'
import './App.css'
import MoviesPage from './pages/MoviesPage'
import TvPage from './pages/TvPage'
import Layout from './pages/Layout'
import CharactersPage from './pages/CharactersPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='peliculas' element={<MoviesPage />} />
        <Route path='tv' element={<TvPage />} />
        <Route path='characters' element={<CharactersPage />} />
      </Route>
    </Routes>
  )
}

export default App
