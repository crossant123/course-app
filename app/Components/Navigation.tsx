import Link from 'next/link'
import React from 'react'
import Themebutton from './themebutton'

const Navigation = () => {
  return (
    <nav className='h-full w-full bg-background p-4 dark:bg-secondary'>
      <ul className='flex flex-row justify-center gap-3 text-text dark:text-darktext'>
        <li>
          <Link
            href='/'
            className='rounded-md bg-primary px-2 hover:-translate-y-1 dark:bg-primary'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='rounded-md bg-primary px-2 hover:-translate-y-1 dark:bg-primary'
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className='rounded-md bg-primary px-2 hover:-translate-y-1 dark:bg-primary'
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href='/card'
            className='rounded-md bg-primary px-2 hover:-translate-y-1 dark:bg-primary'
          >
            Business Card
          </Link>
        </li>
      </ul>
      <Themebutton />
    </nav>
  )
}

export default Navigation
