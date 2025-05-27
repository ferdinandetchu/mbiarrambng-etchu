'use client'
import React, { useEffect, useState } from 'react'
import './carousel.module.css'


export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const prev= () => setCurrentSlide((currentSlide + slides.length - 1) % slides.length)
    const next= () => setCurrentSlide((currentSlide + 1) % slides.length)
    
    useEffect(() => { 
        if(autoSlide) {
            const interval = setInterval(next, autoSlideInterval)
            return () => clearInterval(interval)
        } else {
            return
        }
    })
  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out pw-animate duration-500' style={{transform: `translateX(-${currentSlide * 100}%) scaleY(1.5)`}}>
              {slides}
        </div>
        <div className='absolute w-[600px] bottom-0 right-0 p-8 transition-transform ease-out duration-500 overflow-hidden flex gap-3 items-center'>
            {slides.map((slide, index) => (
                <div key={index} className={`transition-all min-w-52  rounded-xl shadow-2xl overflow-hidden flex ${currentSlide === index ? "h-96 w-56 shadow-3xl" : "h-80"}`} style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                    {slide}
                </div>
            ))}
        </div>
        <div className='absolute flex justify-between items-center inset-0 p-6'>
            <button onClick={prev} className='bg-white bg-opacity-70 hover:bg-opacity-100 shadow text-gray-900 rounded-xl px-4 p-2'>
                Prev
              </button>
              <button onClick={next} className='bg-white bg-opacity-70 hover:bg-opacity-100 shadow text-gray-900 rounded-xl px-4 p-2'>
                  Next
              </button>
          </div>
          <div className='absoluet bottom-4 left-0 right-0'>
              <div className='flex items-center justify-center gap-2'>
                  {slides.map((_, index) => (
                      <div key={index} className={`transition-all w-3 h-3 bg-white rounded-full ${currentSlide === index ? "p-2" : "opacity-50"}`} />
                  ))}

              </div>
          </div>
    </div>
  )
}