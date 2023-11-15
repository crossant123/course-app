import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className='container relative '>
      <div
        id='Business-Card'
        className='relative m-4 flex h-96 rounded-lg bg-teal-500 p-4'
      >
        <div
          id='Photo-board'
          className='left-30 absolute top-0 w-40 bg-emerald-400'
        >
          <p>image head</p>
          <Image
            src='/portrait-image.jpg'
            width={180}
            height={0}
            alt='Picture of Author'
          ></Image>
        </div>
        <div id='Contact-card'>Contact Card</div>
        <div id='Social-Card'>Social Card</div>
        <div
          id='info-container'
          className=' flex-1 overflow-hidden rounded-lg bg-white'
        >
          <div id='Name-Card' className=' bg-teal-200'>
            Anthony Cross
          </div>
          <div id='Bio-Card' className='bg-teal-100'>
            Fill with text about myself
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
