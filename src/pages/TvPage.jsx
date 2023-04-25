import React from 'react'
import Card from '../components/Card'
import Paginator from '../components/Paginator'
import { useFetchTV } from '../hooks/useFetchTV'

export default function TvPage() {
  const { loading, error, tv } = useFetchTV()
  return (
    <>
      <h1 className='text-3xl text-center font-bold  text-white'>
        Popular Tv!
      </h1>
      <div className='md: flex flex-wrap justify-between '>
        <Card loading={loading} error={error} data={tv} />
      </div>
      <Paginator />
    </>
  )
}
