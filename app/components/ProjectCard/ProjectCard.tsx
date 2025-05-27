import React from 'react'
import Chip from '../Chip/Chip'

export default function ProjectCard({project= {imgUrl: '', title: '', description: '', link: '', skills: ['']}}) {
  return (
    <div className='dark:bg-primary rounded-xl p-6 w-[800px]'>
      <img className='w-full h-[400px] object-cover rounded-xl' src={project.imgUrl} alt="" />
      <div className='mt-6 flex gap-4 overflow-hidden'>
        {project.skills.map((skill) => (
            <Chip key={skill} text={skill} />
        ))}
      </div>
    </div>
  )
}
