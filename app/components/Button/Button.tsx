import Link from 'next/link'
import React from 'react'

export default function Button({href='', text='', outlined=false, target=''}) {
  return (
      <Link target={target} className={`${outlined ? 'border border-secondary text-secondary bg-secondary bg-opacity-10 backdrop-blur-3xl' : 'bg-secondary text-primary'} px-8 py-2 font-bold rounded capitalize shadow-inner hover:animate-pulse`} href={href}>{ text}</Link>
  )
}
