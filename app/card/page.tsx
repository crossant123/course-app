import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='flex min-h-screen justify-center bg-teal-100'>
      <div
        id='Business-Card'
        className='my-8 flex min-h-[720px] min-w-[1200px] overflow-hidden rounded-2xl bg-white'
      >
        <div
          id='contact-section'
          className='flex h-full w-1/3 flex-col gap-2 bg-green-600'
        >
          {/* contact Top Info Section */}
          <div className='mt-80 flex flex-col  px-12 text-white'>
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
          <div className='mt-32 px-12'>
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
      </div>
    </section>
  )
}

export default page
