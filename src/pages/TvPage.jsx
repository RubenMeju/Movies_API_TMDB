import React from 'react'
import Card from '../components/Card'
import Paginator from '../components/Paginator'
import { useFetchTV } from '../hooks/useFetchTV'
import { useLocation } from 'react-router-dom'

export default function TvPage() {
  const { loading, error, tv } = useFetchTV()
  const { pathname } = useLocation()

  return (
    <>
      <h1 className='text-3xl text-center font-bold  text-white'>
        {pathname === '/' && 'Popular'}

        {pathname === '/tv/airing_today' && 'Se emite hoy'}
        {pathname === '/tv/on_the_air' && 'En televisión'}
        {pathname === '/tv/top_rated' && 'Mejor valoradas'}
      </h1>
      <div className='md: flex flex-wrap justify-between '>
        <Card loading={loading} error={error} data={tv} />
      </div>
      <Paginator />
    </>
  )
}
