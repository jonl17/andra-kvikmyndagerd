import React from 'react'

type Props = {
  credits: Array<{ role: string; credit: string[] }>
}

export default function Credits({ credits }: Props) {
  return (
    <div className='credits'>
      {credits.map((c, key) => (
        <div className='credits__row' key={key}>
          <p>{c.role}</p>
          <div>
            {c.credit.map((i, idx) => (
              <p key={idx}>{i}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
