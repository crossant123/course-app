import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex min-h-screen justify-center bg-teal-100'>
      <div
        id='Business-Card'
        className='relative my-8 flex max-h-[720px] min-w-[410px] max-w-[1200px] overflow-hidden rounded-2xl bg-white md:min-w-[1200px]'
      >
        {/* Begin Contact Div */}
        <div
          id='contact-section'
          className='flex w-1/3 flex-col gap-2 bg-green-600'
        >
          {/* contact Top Info Section */}
          <div className='mt-72 flex flex-col px-4 text-white md:px-12'>
            <div className='mb-4'>
              <div className='my-2 flex flex-row gap-2 font-semibold'>
                <Image
                  src={'/email.svg'}
                  width={25}
                  height={25}
                  alt='mail icon'
                />
                <h2>Email</h2>
              </div>
              <p>crossant123@gmail.com</p>
            </div>
            <div className='mb-4'>
              <div className='my-2 flex flex-row gap-2 font-semibold'>
                <Image
                  src={'/phone.svg'}
                  width={25}
                  height={25}
                  alt='mail icon'
                />
                <h2>Phone</h2>
              </div>
              <p>(616)250-7374</p>
            </div>
          </div>
          <div
            id='Separator bar'
            className='mt-8 min-h-[20px] min-w-full bg-white'
          />

          {/* Left side Footer - Social Section */}
          <div className='mt-8 px-12'>
            <h2 className='mb-2 text-white'>Social Media</h2>
            <div className='flex flex-row gap-2'>
              <Link
                href={'https://www.facebook.com/crossant123'}
                target='_blank'
              >
                <Image
                  src={'/facebook.svg'}
                  width={25}
                  height={25}
                  alt='Facebook icon'
                />
              </Link>
              <Link
                href={'https://www.threads.net/@crossant_official'}
                target='_blank'
              >
                <Image
                  src={'/threads.svg'}
                  width={25}
                  height={25}
                  alt='Threads icon'
                />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/anthonycross123/'}
                target='_blank'
              >
                <Image
                  src={'/linkedin.svg'}
                  width={25}
                  height={25}
                  alt='Linkedin icon'
                />
              </Link>
            </div>
          </div>
        </div>
        {/* End Contact Div */}

        {/* Begin Portrait image */}
        <Image
          src={'/portrait-image.jpg'}
          width={200}
          height={400}
          alt='Portrait of Developer'
          className='absolute left-80 top-10 h-[540px] w-auto rounded-xl'
        />
        {/* End portrait image */}
        {/* Begin Description Div */}
        <div className='whitespace-wrap ml-64 mt-10 flex max-w-md flex-col space-y-6'>
          <h1 className='flex flex-col text-3xl font-bold'>
            Anthony <span className='text-emerald-400'>Cross</span>
          </h1>
          <div id='Title' className='flex items-center gap-4 font-semibold'>
            <p>Frontend Dev</p>{' '}
            <i
              id='Dot-Separator'
              className='h-4 w-4 rounded-full bg-gray-900'
            />{' '}
            <p>Michigan</p>
          </div>
          <p id='Description' className=' font-medium'>
            I am an{' '}
            <span className='font-medium text-emerald-400'>Inspired</span> and{' '}
            <span className='font-medium text-emerald-400'>Creative</span>{' '}
            Developer with skills in Database design and application
            development. Focused on my attention to detail and learning new
            skills.
          </p>
          <div className=''>
            <h2 id='Career Goals' className='font-semibold'>
              Working With Technologies:
            </h2>
            {/* create a list of technologies used before */}
            <div>
              <ul className=' list-disc'>
                <li>JavaScript</li>
                <li>C#</li>
                <li>SQL Database</li>
                <li>Restful API</li>
                <li>ASP.Net</li>
                <li>NoSQL Databases (firebase)</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Begin Description Div */}
        <div id='corner decoration' className='' />
        <div id='underlining decoration' className='' />
        <div id='photo decoration' className='' />
      </div>
    </section>
  )
}

export default page
