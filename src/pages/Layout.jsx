import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import NavBar from '../components/navBar/NavBar'

export const LanguageContext = createContext()

export default function Layout() {
  const [language, setLanguage] = useState('es')

  return (
    <>
      <LanguageContext.Provider value={language}>
        <NavBar setLanguage={setLanguage} />
        <Outlet />
      </LanguageContext.Provider>
    </>
  )
}
