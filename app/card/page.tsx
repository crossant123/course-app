import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex justify-evenly'>
      <div id='Business-Card' className='bg-teal-100'>
        <div
          id='Photo-board'
          className='grid justify-center gap-4 overflow-hidden rounded-lg bg-teal-400 p-4  md:rounded-md'
        >
          <h1 className=' font-bold'>Anthony Cross</h1>
          <Image
            src='/portrait-image.jpg'
            width={180}
            height={0}
            alt='Picture of Author'
          ></Image>
        </div>
        <div id='Contact-card' className='mt-2 rounded-lg bg-emerald-200 p-4'>
          <h2 className='font-bold'>Contact</h2>
          <p>The best ways to contact me:</p>

          <ul className='mt-2 flex flex-row gap-4'>
            <li>
              <h3 className='font-semibold'>Email</h3>
              <p>crossant123@gmail.com</p>
              <button>Contact Us</button>
            </li>
            <li>
              <h3 className=' font-semibold'>Phone</h3>
              <p>(616)250-7374</p>
              <button>Contact Us</button>
            </li>
            <li>
              <h3 className=' font-semibold'>Alternative Contact</h3>
              <ul>
                <li>
                  <h4>Linkedin</h4>
                  <button>
                    <Link href='https://www.linkedin.com/in/anthonycross123/'>
                      Contact Us
                    </Link>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='Social-Card' className='p-4 font-bold'>
          Social Card
        </div>
        <div id='info-container' className='p-4 '>
          <div id='Name-Card' className=''>
            Anthony Cross
          </div>
          <div id='Bio-Card' className=''>
            Fill with text about myself
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
