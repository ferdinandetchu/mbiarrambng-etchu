import React from 'react'
import Button from '../Button/Button'
import ExperinceCard from '../ExperinceCard/ExperinceCard'

const experince = [
  {
    duration: '2023 — Present',
    headline: 'Senior Frontend Engineer, Accessibility · Klaviyo',
    description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS']
  },
  {
    duration: '2024 — Present',
    headline: 'Senior Frontend Engineer, Accessibility · Klaviyo',
    description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS']
  }
]

export default function ExperienceSection() {
  return (
    <div id='experince' className='sm:min-h-screen bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-dark via-primary to-primary overflow-hidden'>
      <div className='flex gap-10 z-20 flex-wrap sm:min-h-screen my-10 mx-3 items-center justify-center'>
        <div className='sm:w-[400px]'>
          <h2 className='pw-heading-font sm:text-6xl capitalize'>Experience</h2>
          <div className='mt-5 flex gap-2'>
              <Button text='resume' />
          </div>
        </div>
        <div className='sm:w-[800px] flex flex-col gap-4'>
          {experince.map((experince) => (
            <ExperinceCard key={experince.duration} duration={experince.duration} headline={experince.headline} description={experince.description} skills={experince.skills}  />
          ))}
        </div>
      </div>
    </div>
  )
}
