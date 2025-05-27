'use client'
// import React, { useEffect, useState } from 'react'
import './hero.model.css'
import StrokeText from '../StrokeText/StrokeText';
import Chip from '../Chip/Chip';
import Button from '../Button/Button';

const skils = ['JavaScript', 'HTML', 'CSS', 'Next.JS', 'React.JS', 'Tailwind', 'Nuxt.JS', 'Vue.JS']

export default function HeroSection() {
    // const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    
    // useEffect(() => {
    //     const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
    //         setMousePosition({ x: ev.clientX, y: ev.clientY });
    //     };
    
    //     window.addEventListener('mousemove', updateMousePosition);
        
    //     return () => {
    //         window.removeEventListener('mousemove', updateMousePosition);
    //     };
    // }, []);

    return (
        <div id='hero' className='sm:min-h-screen bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-primary-dark to-primary-dark overflow-hidden'>
            {/* <div
                style={{ top: `${mousePosition.y ? mousePosition.y - 300 : 0}px`, left: `${mousePosition.x ? mousePosition.x - 300 : 0}px` }} 
                className="transition-all duration-150 ease-linear z-0 rounded-full absolute w-[600] h-[600] bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-primary-dark to-primary-dark">
            </div> */}
            <div className='flex gap-20 z-20 flex-wrap sm:min-h-screen m-10 items-center justify-center'>
                <div className='sm:w-[550px]'>
                    <h1 className='pw-heading-font sm:text-6xl z-20 capitalize'>Mbiarrambang <br />Etchu Ferdinand</h1>
                    <StrokeText text='Front-End Developer' />
                    <div className='mb-5 flex gap-2 overflow-hidden'>
                        {skils.map((skill) => (
                            <Chip key={skill} text={skill} />
                        ))}
                    </div>
                    <p>
                        Experienced front-end developer transforming designs into engaging web experiences. Proven ability to deliver high-quality code and collaborate effectively.      
                    </p>
                    <div className='flex gap-2 mt-5'>
                        <Button text='Mentor' target='_blank' />
                        <Button text='Contact' outlined={ true } />
                    </div>
                </div>
                
                <div className='sm:w-[550px]'>
                    <div className='bg-primary p-2 rounded-xl'>
                        <div className='flex justify-end gap-2 mb-2 mr-3'>
                            <div className='w-3 h-3 bg-primary-dark rounded-full'></div>
                            <div className='w-3 h-3 bg-primary-dark rounded-full'></div>
                             <div className='w-3 h-3 bg-primary-dark rounded-full'></div>
                        </div>
                        <div className='rounded-xl overflow-hidden bg-primary-dark'>
                            {/* Note: The 'src' attribute below links to a Google Drive viewing page, not a direct image file. This may prevent the image from rendering correctly. */}
                            <img src="/coding_react.gif" alt="coding image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}