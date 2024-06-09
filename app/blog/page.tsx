import React from 'react'
import { getAllPosts } from '../lib/posts/post'
import Link from 'next/link'

const BlogPage = async () => {
  const posts = await getAllPosts()

  return (
    <div className='flex flex-col items-center'>
      <div className='mb-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white shadow-lg'>
        <h1 className='mb-4 text-4xl font-bold'>
          Welcome to My Coding Journey
        </h1>
      </div>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map(post => (
          <li
            key={post.postId}
            className='rounded-lg bg-gray-100 p-6 shadow-md transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
          >
            <Link href={`blog/${post.postId}`}>
              <div className='mb-4'>
                <h4 className='text-xl font-bold text-gray-800 dark:text-gray-200'>
                  {post.frontmatter?.Title}
                </h4>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {post.frontmatter?.Author}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                  Read More
                </span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-blue-600 dark:text-blue-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage
