import React from 'react'
import Credits from '../Credits/Credits'

const synopsis =
  "Unique artist couple, Helena and Thorvaldur truly nourished each other's creative spirit. Helena's journey since Thorvaldur's passing has been one of finding a new meaning to life and the motivation to continue her artistic ambitions whilst securing a path for her late husband's legacy. IS LOVE is a beautiful and intimate portrait of grief and its counterpart, true love."

const salesContact = {
  name: 'Kristin Andrea Thordardottir',
  email: 'kristinandrea@gmail.com',
}

const credits = [
  {
    role: 'Production Company',
    credit: ['Andrá Productions'],
  },
  {
    role: 'Written and directed by',
    credit: ['Kristin Andrea Thordardottir'],
  },
  {
    role: 'Director of Photography',
    credit: ['Biarni Felix Biarnason'],
  },
  {
    role: 'Editing by',
    credit: ['Sighvatur Omar Kristinsson'],
  },
  {
    role: 'Music by',
    credit: ['Ulfur Eldjarn'],
  },
  {
    role: 'Sound Design',
    credit: ['Kiartan Kiartansson'],
  },
  {
    role: 'Colorist',
    credit: ['Luis Ascanio'],
  },
  {
    role: 'Graphics',
    credit: ['Biörn Thor Biörnsson'],
  },
  {
    role: 'Produced by',
    credit: ['Olaf de Fleur', 'Kristin Andrea Thordardottir'],
  },
]

const link = 'https://vimeo.com/444813094/c621de7ca2'

export default function MovieSynopsis() {
  return (
    <section className='movie-synopsis rich-text'>
      <div className='movie-synopsis__text-box'>
        <div>
          <p className='text-label mb-0'>Short synopsis:</p>
          <p className='mb-5'>{synopsis}</p>
        </div>
        <a href={link} target='_blank' rel='noreferrer'>
          LINK
        </a>
      </div>
      <div>
        <div className='mb-5'>
          <p className='text-label mb-0'>Sales contact:</p>
          <p className='mb-0'>{salesContact.name}</p>
          <a
            target='_blank'
            rel='noreferrer'
            href={`mailto:${salesContact.email}`}
          >
            <p>{salesContact.email}</p>
          </a>
        </div>
        <Credits credits={credits} />
      </div>
    </section>
  )
}
