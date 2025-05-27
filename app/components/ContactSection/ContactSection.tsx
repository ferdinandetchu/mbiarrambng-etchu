import React from 'react'
import InputField from '../InputField/InputField'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'

export default function ContactSection() {
  return (
    <div id='experince' className='sm:min-h-screen bg-grad bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-dark via-primary to-primary overflow-hidden'>
        <div className='flex sm:gap-20 z-20 flex-wrap sm:min-h-screen my-10 mx-3 items-center justify-center'>
            <div className='sm:w-[1100px]'>
                <h2 className='pw-heading-font sm:text-6xl capitalize mb-2'>Contact</h2>
                <p className='text-3xl w-[600]'>
                    Got a question or proposal, or just want to say hello? Go ahead.
                </p>
                <div className='flex flex-wrap my-12'>
                    <InputField className='flex flex-col w-1/2' label='Full Name' placeholder='Enter your full name' />
                    <InputField className='flex flex-col w-1/2 pl-6' label='Email' placeholder='Enter your email' type='email' />
                    <TextArea className='flex flex-col w-full mt-6' label='Message' placeholder='What do you want to tell me?' />
                    <div className='w-full flex justify-between mt-6'>
                        <InputField className='flex flex-col w-1/2' label='Phone Number' placeholder='+237671097299' />
                          <div className='flex items-end'>
                              <Button text='Send' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
