import React from 'react'

export default function VideoPlayer() {
  return (
    <div className='dark:bg-primary-dark rounded-xl p-6 h-80'>
      <iframe className='rounded-xl w-full h-full' src="https://www.youtube.com/embed/xa6hGiYw7qQ?si=BCBAGEKhdhmKJOgM" title="YouTube video player" allow="autoplay;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}
