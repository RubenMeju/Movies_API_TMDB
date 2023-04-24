import { Routes, Route } from 'react-router-dom'
import './App.css'
import MoviesPage from './pages/MoviesPage'
import TvPage from './pages/TvPage'
import Characters from './pages/Characters'
import Layout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='peliculas' element={<MoviesPage />} />

        <Route path='tv' element={<TvPage />} />
        <Route path='characters' element={<Characters />} />
      </Route>
    </Routes>
  )
}

export default App
