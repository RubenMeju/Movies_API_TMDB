// import './navbar.css'
import MenuBars from './MenuBars'

export default function NavBar() {
  return (
    <nav className='w-full h-16 bg-red-500 flex justify-around items-center'>
      <MenuBars />

      <h1 className='logo'>Movies API</h1>
    </nav>
  )
}
