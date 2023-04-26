import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className='container m-auto pt-16'>
        <Outlet />
      </div>
    </>
  )
}
