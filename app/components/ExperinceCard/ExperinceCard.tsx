import React from 'react'
import Chip from '../Chip/Chip'

export default function ExperinceCard({headline= '', description='', skills=[''], duration=''}) {
  return (
    <div className='flex gap-4'>
      <div>
        <p className='w-20'>{ duration }</p>
      </div>
      <div className='flex flex-col gap-3 overflow-hidden bg-white bg-opacity-10 backdrop-blur-3xl p-4 border border-white border-opacity-25 rounded'>
        <h3 className='font-bold text-3xl truncate'>{ headline }</h3>
        <p className=''>{ description }</p>
        <div className='mb-5 flex gap-2 overflow-hidden'>
          {skills.map((skill) => (
            <Chip key={skill} text={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
