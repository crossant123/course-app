import Link from 'next/link'
import React from 'react'

const Aboutlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <header className='bg-gray-100 p-4'>
        <nav>
          <ul>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/about/team'>Team</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1>About Layout</h1>
      <div className='mt-6'>{children}</div>
    </section>
  )
}

export default Aboutlayout
