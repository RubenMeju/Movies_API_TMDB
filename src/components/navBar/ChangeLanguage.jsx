import { useContext } from 'react'
import iconSpain from '../../assets/spain.png'
import iconUnitedKingdom from '../../assets/united-kingdom.png'
import { LanguageContext } from '../../pages/Layout'

export default function ChangeLanguage({ setLanguage }) {
  const language = useContext(LanguageContext)
  return (
    <>
      <div className='flex'>
        <img
          src={language === 'es' ? iconSpain : iconUnitedKingdom}
          alt='icono de bandera de España'
          className='w-8 h-8'
        />
        <select
          onChange={(e) => setLanguage(e.target.value)}
          className='pl-0.5 bg-transparent text-slate-100 outline-none cursor-pointer'
        >
          <option value='es' className='bg-blue-800'>
            Español
          </option>
          <option value='en' className='bg-blue-800'>
            English
          </option>
        </select>
      </div>
    </>
  )
}
