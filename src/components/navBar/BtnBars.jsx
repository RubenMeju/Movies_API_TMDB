import iconBars from '../../assets/iconBars.svg'

export default function BtnBars({ isOpen, setIsOpen }) {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
        <img src={iconBars} alt='' className='w-12 h-12' />
      </button>
    </>
  )
}
