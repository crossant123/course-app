import React from 'react'
import Blog from './Blog'

function BlogPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white shadow-lg'>
        <h1 className='mb-4 text-4xl font-bold'>
          Welcome to My Coding Journey
        </h1>
        <p className='text-lg'>
          Embark on an exciting adventure through the realms of code and
          technology. Join me as I share my experiences, insights, and
          discoveries in the ever-evolving world of programming.
        </p>
      </div>
      <Blog />
    </div>
  )
}

export default BlogPage
