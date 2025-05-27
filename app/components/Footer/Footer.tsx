import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex justify-center w-full inset-0 p-6 h-20 bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-primary-dark to-primary-dark overflow-hidden'>
      <div className='flex gap-4'>
        <Link href='#'>
            <Image width={30} height={30}  alt= 'Ferdinand' src={'/facebook.svg'} />
        </Link>
        <Link href='#'>
            <Image width={30} height={30}  alt= 'Ferdinand' src={'/github.svg'} />
        </Link>
        <Link href='#'>
            <Image width={30} height={30}  alt= 'Ferdinand' src={'/instagram.svg'} />
        </Link>
        <Link href='#'>
            <Image width={30} height={30}  alt= 'Ferdinand' src={'/in.svg'} />
        </Link>
      </div>
    </div>
  )
}
