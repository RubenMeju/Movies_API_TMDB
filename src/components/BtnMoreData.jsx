import React from 'react'

export default function BtnMoreData({ page, setPage }) {
  return (
    <div className='flex justify-center p-8'>
      <button
        className='bg-green-600 rounded-md text-slate-100 px-6 py-4'
        onClick={() => {
          setPage(page + 1)
          scroll(0, 0)
        }}
      >
        Mostras más
      </button>
    </div>
  )
}
