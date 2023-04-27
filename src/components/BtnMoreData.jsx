import { useTranslation } from 'react-i18next'

export default function BtnMoreData({ page, setPage }) {
  const { t } = useTranslation()

  return (
    <div className='flex justify-center p-8'>
      <button
        className='bg-green-600 rounded-md text-slate-100 px-6 py-4'
        onClick={() => {
          setPage(page + 1)
          scroll(0, 0)
        }}
      >
        {t('btnMore')}
      </button>
    </div>
  )
}
