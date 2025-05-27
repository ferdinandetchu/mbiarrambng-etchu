import Link from 'next/link'
import React from 'react'

export default function Chip({text='', href='', className=''}) {
  return (
    <Link href={href} className={`${className} border border-white border-opacity-25 rounded bg-white bg-opacity-10 backdrop-blur-3xl px-4 py-2 text-xs my-2`}>{ text }</Link>
  )
}
