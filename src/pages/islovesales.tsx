import MoviePoster from '@src/components/site/MoviePoster/MoviePoster'
import MovieSynopsis from '@src/components/site/MovieSynopsis/MovieSynopsis'
import React from 'react'

export default function IsLoveSalesPage() {
  return (
    <div className='page'>
      <div className='container'>
        <MoviePoster />
        <MovieSynopsis />
      </div>
    </div>
  )
}
