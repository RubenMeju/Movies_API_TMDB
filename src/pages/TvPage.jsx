import React from 'react'
import Card from '../components/Card'
import { useFetchTV } from '../hooks/useFetchTV'
import { useLocation } from 'react-router-dom'
import BtnMoreData from '../components/BtnMoreData'
import { useTranslation } from 'react-i18next'

export default function TvPage() {
  const { t } = useTranslation()
  const { loading, error, tv, page, setPage } = useFetchTV()
  const { pathname } = useLocation()

  return (
    <>
      <h1 className='pt-8 text-3xl text-center font-bold  text-slate-300'>
        {pathname === '/tv' && t('tvPopular')}
        {pathname === '/tv/airing_today' && t('tvAiringToday')}
        {pathname === '/tv/on_the_air' && t('tvOnTheAir')}
        {pathname === '/tv/top_rated' && t('tvTopRated')}
      </h1>
      <div className='flex flex-col items-center md:flex-row flex-wrap justify-around'>
        <Card loading={loading} error={error} data={tv} paramUrl='/tv/' />
      </div>
      <BtnMoreData page={page} setPage={setPage} />
    </>
  )
}
