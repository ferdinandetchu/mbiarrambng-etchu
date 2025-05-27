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
import StoryCard from '../StoryCard/StoryCard';

interface Story {
    imgUrl: string;
    title: string;
    name: string;
    description: string;
}

// Renamed from 'projects' to 'stories' for clarity
const stories: Story[] = [
    {
        imgUrl: '/img/bk-socials.png',
        title: 'BK Socials',
        name: 'BK Socials',
        description: "Taking [Your Name]'s JavaScript class was a game-changer for me. [Your Name] has a knack for breaking down complex concepts into easy-to-understand explanations. The hands-on exercises and real-world examples really solidified my understanding. I left the class feeling confident and ready to tackle JavaScript projects. Highly recommend!",
    },
    {
        imgUrl: '/img/paveway-academy.png',
        title: 'PaveWay Academy',
        name: 'BK Socials',
        description: 'Custom-built SMM panel, tailored to their specific needs, delivering streamlined social media growth solutions.',
    },
    {
        imgUrl: '/img/aveway-academy.png',
        title: 'PaveWay Academy',
        name: 'BK Socials',
        description: 'Custom-built SMM panel, tailored to their specific needs, delivering streamlined social media growth solutions.',
    },
    {
        imgUrl: '/img/avway-academy.png',
        title: 'PaveWay Academy',
        name: 'BK Socials',
        description: 'Custom-built SMM panel, tailored to their specific needs, delivering streamlined social media growth solutions.',
    }
]

export default function StorySlider() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
          {stories.map((storyItem) => (
            <SwiperSlide key={storyItem.imgUrl}>
                {/* Assuming StoryCard accepts a prop, e.g., 'story' or 'storyData' */}
                <StoryCard />
            </SwiperSlide>
          ))}
      </Swiper>
  )
}
