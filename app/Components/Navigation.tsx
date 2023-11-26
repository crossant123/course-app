import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <header>
      <nav className='bg-gray-300'>
        <ul className='flex flex-row justify-center gap-4'>
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
      </nav>
    </header>
  )
}

export default Navigation
