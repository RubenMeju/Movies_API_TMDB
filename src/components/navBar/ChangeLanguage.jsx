import iconSpain from '../../assets/spain.png'
import iconUnitedKingdom from '../../assets/united-kingdom.png'
import { useTranslation } from 'react-i18next'

export default function ChangeLanguage() {
  const { i18n } = useTranslation()
  const language = i18n.languages[0]
  return (
    <>
      <div className='flex pl-8'>
        <img
          src={language === 'es' ? iconSpain : iconUnitedKingdom}
          // src={language === 'es' ? iconSpain : iconUnitedKingdom}
          alt='icono de bandera de España'
          className='w-8 h-8'
        />
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
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
