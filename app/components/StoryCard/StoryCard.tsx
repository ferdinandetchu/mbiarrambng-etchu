import React from 'react'
import Star from '../Star/Star'
import Image from 'next/image'

export default function StoryCard() {
    return (
        <div className='border-opacity-25 rounded-xl bg-white bg-opacity-10 backdrop-blur-3xl p-6 w-96'>
            <div className='flex gap-4'>
                <div>
                    <Image width={100} height={30}  alt= 'Ferdinand' src={'/img/Ferdinand.jpg'} className='bg-primary-dark rounded-full'></Image>
                </div>
                <div>
                    <h3 className='text-3xl font-bold truncate'>
                        Eveline S
                    </h3>
                    <h4 className='text-xl'>CTo PaveWay Group</h4>
                    <div className='flex'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>
            <p>
                Taking [Your Name]'s JavaScript class was a game-changer for me. [Your Name] has a knack for breaking down complex concepts into easy-to-understand explanations. The hands-on exercises and real-world examples really solidified my understanding. I left the class feeling confident and ready to tackle JavaScript projects. Highly recommend!
            </p>
        </div>
    )
}
