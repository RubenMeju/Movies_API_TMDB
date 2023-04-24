import React, { useState } from 'react'

export default function Paginator() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)

  return (
    <div aria-label='pagination'>
      <ul className='inline-flex'>
        <li>
          <button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'>
            Prev
          </button>
        </li>
        <li>
          <button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'>
            1
          </button>
        </li>
        <li>
          <button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100'>
            2
          </button>
        </li>
        <li>
          <button className='h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline'>
            3
          </button>
        </li>
        <li>
          <button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100'>
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}
