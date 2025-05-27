'use client'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';
import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
    {
        imgUrl: '/img/bk-socials.png',
        title: 'BK Socials',
        description: 'Custom-built SMM panel, tailored to their specific needs, delivering streamlined social media growth solutions.',
        link: '/#',
        skills: ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS']
    },
    {
        imgUrl: '/img/paveway-academy.png',
        title: 'PaveWay Academy',
        description: 'Custom-built SMM panel, tailored to their specific needs, delivering streamlined social media growth solutions.',
        link: '/#',
        skills: ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS']
    },
    {
        imgUrl: '/img/paeway-academy.png',
        title: 'PaveWay Academy',
        description: 'Custom-built SMM panel, tailored to their specific needs, delivering streamlined social media growth solutions.',
        link: '/#',
        skills: ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS']
    }
]

export default function ProjectSlider() {
  return (
    <Swiper
      spaceBetween={600}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
          {projects.map((project, index) => (
            <SwiperSlide key={project.imgUrl}>
                <ProjectCard project={project} />
            </SwiperSlide>
          ))}
      </Swiper>
  )
}
