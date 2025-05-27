import React from 'react'

export default function TextArea({label = '', placeholder = '', className = ''}) {
  return (
    <div className={`${className}`}>
        <label className='mb-2 font-bold capitalize text-xl' htmlFor="">{ label }</label>
        <textarea className='bg-primary-dark border border-secondary rounded h-52 p-3' placeholder={placeholder} />
    </div>
  )
}
