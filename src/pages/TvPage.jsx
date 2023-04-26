import React from 'react'
import Card from '../components/Card'
import { useFetchTV } from '../hooks/useFetchTV'
import { useLocation } from 'react-router-dom'
import BtnMoreData from '../components/BtnMoreData'

export default function TvPage() {
  const { loading, error, tv, page, setPage } = useFetchTV()
  const { pathname } = useLocation()

  return (
    <>
      <h1 className='pt-8 text-3xl text-center font-bold  text-slate-300'>
        {pathname === '/tv' && 'TV populares'}
        {pathname === '/tv/airing_today' && 'Se emite hoy'}
        {pathname === '/tv/on_the_air' && 'En televisión'}
        {pathname === '/tv/top_rated' && 'Mejor valoradas'}
      </h1>
      <div className='md: flex flex-wrap justify-between '>
        <Card loading={loading} error={error} data={tv} />
      </div>
      <BtnMoreData page={page} setPage={setPage} />
    </>
  )
}
