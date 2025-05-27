import React from 'react'
import StorySlider from '../Slider/StorySlider'

export default function StoriesSection() {
  return (
    <div id='projetcs' className='sm:min-h-screen bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-primary-dark to-primary-dark overflow-hidden'>
        <div className='flex gap-10 z-20 flex-wrap sm:min-h-screen my-10 mx-3 items-center justify-center'>
            <div className='sm:w-[1100px]'>
                <h2 className='pw-heading-font sm:text-6xl capitalize'>Stories</h2>
                <div className='my-10'>
                    <StorySlider />
                </div>
            </div>
        </div>
    </div>
  )
}
