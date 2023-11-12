import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <header className='mb-4'>
      <div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            {/* <li>
              <Link href=''>Products</Link>
            </li>
            <li>
              <Link href=''>Sales</Link>
            </li> */}
          </ul>
          <div>
            {/* Create Theme changer */}
            {/* Create Sign Up icon */}
            {/* Create Style randomixer */}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
