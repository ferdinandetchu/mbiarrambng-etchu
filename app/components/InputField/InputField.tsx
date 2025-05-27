import React from 'react'

export default function InputField({type= 'text', label = '', placeholder = '', className = ''}) {
  return (
    <div className={`${className}`}>
        <label className='mb-2 font-bold capitalize text-xl' htmlFor="">{ label }</label>
        <input className='bg-primary-dark border border-secondary rounded p-3 w-full' type={type} placeholder={placeholder} />
    </div>
  )
}
