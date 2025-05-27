import React from 'react'
import './logo.model.css'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/#hero' className='flex justify-center items-center z-20 m-2 border fixed w-14 h-14  rounded-full dark:border-secondary'>
            <p className='font-extrabold text-secondary text-3xl' style={{transform: 'scaleX(-1)'}}>F</p>
            <p className='-ml-2 font-extrabold text-secondary text-3xl'>E</p>
        </Link>
    )
}