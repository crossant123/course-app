'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
    }

    handleResize() // Check initial screen size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <section>
      {isMobile ? (
        // Render mobile UI

        <section className='flex min-h-screen flex-col justify-center bg-background px-4 dark:bg-background'>
          <div className='dark:bg-darkbackground overflow-hidden rounded-2xl bg-background'>
            {/* Header */}
            <div className='py-6 text-center'>
              <h1 className='text-3xl font-bold text-text dark:text-text'>
                Anthony <span className='text-primary'>Cross</span>
              </h1>
              <p className='font-semibold text-text dark:text-text'>
                Frontend Dev, Michigan
              </p>
            </div>

            {/* Portrait Image */}
            <div className='mb-6 flex justify-center'>
              <Image
                src={'/portrait-image.jpg'}
                width={200}
                height={200}
                alt='Portrait of Developer'
                className='rounded-full'
              />
            </div>

            {/* Contact Information and Social Media Links */}
            <div className='mb-6 flex flex-col items-center justify-between md:flex-row'>
              {/* Contact Information */}
              <div className='mb-4 flex items-center md:mb-0'>
                <div className='mr-2 flex items-center'>
                  <Image
                    src={'/email.svg'}
                    width={20}
                    height={20}
                    alt='mail icon'
                  />
                  <p className='ml-2 text-text dark:text-text'>
                    crossant123@gmail.com
                  </p>
                </div>
                <div className='ml-4 flex items-center'>
                  <Image
                    src={'/phone.svg'}
                    width={20}
                    height={20}
                    alt='mail icon'
                  />
                  <p className='ml-2 text-text dark:text-text'>(616)250-7374</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className='flex'>
                <Link
                  href={'https://www.facebook.com/crossant123'}
                  target='_blank'
                  className='mr-2'
                >
                  <Image
                    src={'/facebook.svg'}
                    width={20}
                    height={20}
                    alt='Facebook icon'
                  />
                </Link>
                <Link
                  href={'https://www.threads.net/@crossant_official'}
                  target='_blank'
                  className='mr-2'
                >
                  <Image
                    src={'/threads.svg'}
                    width={20}
                    height={20}
                    alt='Threads icon'
                  />
                </Link>
                <Link
                  href={'https://www.linkedin.com/in/anthonycross123/'}
                  target='_blank'
                >
                  <Image
                    src={'/linkedin.svg'}
                    width={20}
                    height={20}
                    alt='Linkedin icon'
                  />
                </Link>
              </div>
            </div>

            {/* Description */}
            <div className='mb-6 text-text dark:text-text'>
              <p className='font-medium'>
                I am an{' '}
                <span className='font-medium text-primary dark:text-primary'>
                  Inspired
                </span>{' '}
                and{' '}
                <span className='font-medium text-primary dark:text-primary'>
                  Creative
                </span>{' '}
                Developer with skills in Database design and application
                development. Focused on my attention to detail and learning new
                skills.
              </p>
            </div>

            {/* Technologies List */}
            <div className='mb-6'>
              <h2 className='mb-2 font-semibold text-primary dark:text-primary'>
                Working With Technologies:
              </h2>
              <ul className='text-sm text-text dark:text-text'>
                <li>JavaScript</li>
                <li>C#</li>
                <li>SQL Database</li>
                <li>Restful API</li>
                <li>ASP.Net</li>
                <li>NoSQL Databases (firebase)</li>
              </ul>
            </div>
          </div>
        </section>
      ) : (
        // Render desktop UI

        <section className='flex min-h-screen justify-center bg-background dark:bg-background'>
          <div
            id='Business-Card'
            className='dark:bg-darkbackground relative my-8 flex max-h-[720px] min-w-[410px] max-w-[1200px] overflow-hidden rounded-2xl bg-background md:min-w-[1200px]'
          >
            {/* Begin Contact Div */}
            <div
              id='contact-section'
              className='flex w-1/3 flex-col gap-2 bg-primary dark:bg-primary'
            >
              {/* contact Top Info Section */}
              <div className='dark:text-darktext mt-72 flex flex-col px-4 text-text md:px-12'>
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
                className='mt-8 min-h-[20px] min-w-full bg-accent dark:bg-accent'
              />

              {/* Left side Footer - Social Section */}
              <div className='mt-8 px-12'>
                <h2 className='mb-2 text-text dark:text-text'>Social Media</h2>
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
              <h1 className='flex flex-col text-3xl font-bold text-text dark:text-text'>
                Anthony <span className='text-primary'>Cross</span>
              </h1>
              <div
                id='Title'
                className='flex items-center gap-4 font-semibold text-text dark:text-text'
              >
                <p>Frontend Dev</p>{' '}
                <i
                  id='Dot-Separator'
                  className='h-4 w-4 rounded-full bg-accent dark:bg-accent'
                />{' '}
                <p>Michigan</p>
              </div>
              <p
                id='Description'
                className=' font-medium text-text dark:text-text'
              >
                I am an{' '}
                <span className='font-medium text-primary dark:text-primary'>
                  Inspired
                </span>{' '}
                and{' '}
                <span className='font-medium text-primary dark:text-primary'>
                  Creative
                </span>{' '}
                Developer with skills in Database design and application
                development. Focused on my attention to detail and learning new
                skills.
              </p>
              <div className=''>
                <h2
                  id='Career Goals'
                  className='font-semibold text-primary dark:text-primary'
                >
                  Working With Technologies:
                </h2>
                {/* create a list of technologies used before */}
                <div className=' text-text dark:text-text'>
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
      )}
    </section>
  )
}
export default Page
