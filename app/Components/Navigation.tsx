import Link from 'next/link'
import React from 'react'
import Themebutton from './themebutton'

const Navigation = () => {
  return (
    <nav className='h-full w-full bg-gray-300 p-4'>
      <ul className='flex flex-row justify-center gap-3 '>
        <li>
          <Link
            href='/'
            className='rounded-md bg-emerald-300 px-2 hover:-translate-y-1'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='rounded-md bg-emerald-300 px-2 hover:-translate-y-1'
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className='rounded-md bg-emerald-300 px-2 hover:-translate-y-1'
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href='/card'
            className='rounded-md bg-emerald-300 px-2 hover:-translate-y-1'
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
