import React from 'react'
import Star from '../Star/Star'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Button from '../Button/Button'
import Chip from '../Chip/Chip'

const skills = ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS', 'Vuetify', 'React Native', 'SCSS' ]

export default function MentorshipSection() {
    return (
        <div id='experince' className='sm:min-h-screen bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-dark via-primary to-primary overflow-hidden'>
            <div className='flex sm:gap-20 z-20 flex-wrap sm:min-h-screen my-10 mx-3 items-center justify-center'>
                <div className='sm:w-[550px]'>
                    <h2 className='pw-heading-font sm:text-6xl capitalize'>mentorship<span className='text-2xl pw-heading-font-light'>($10/hr)</span></h2>
                    <div className='flex sm:gap-2 items-center'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <VideoPlayer />
                    <div className='my-8 flex gap-4 items-center'>
                        <Button text='Book Trail' />
                        <p className='pw-heading-font-regular'>30 Minutes free trail lesson</p>
                    </div>
                </div>
                <div className='sm:w-[550px]'>
                    <p className='text-4xl'>I have mentored over 200+ students online in the past 3 years</p>
                    <h3 className='pw-heading-font sm:text-6xl capitalize mt-7'>Skills</h3>
                    <div className='flex flex-wrap gap-4 my-6'>
                        {skills.map((skill) => (
                            <Chip key={skill} className='w-1/3 my-0 flex justify-center'  text={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
