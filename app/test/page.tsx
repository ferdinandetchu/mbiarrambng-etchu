import React from 'react'
import Carousel from '../components/Carousel/Carousel'

const imageUrls = ['/img/about_bg.jpg', '/img/bg.jpg', 'img/alain.jpg', 'img/Desmond.jpg', 'img/hero_image.jpg']

export default function test() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Carousel >
        {imageUrls.map((url, index) => (
          <img src={url} key={index} alt={url} />
        ))}
      </Carousel>
    </div>
  )
}