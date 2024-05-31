import React from 'react'

interface BlogPostProps {
  id: string
  title: string
  description: string
  date: string
  link: string
  imageURL?: string
  authorName: string
}

const BlogPost = React.memo<BlogPostProps>(
  ({ id, title, description, date, link, imageURL, authorName }) => {
    return (
      <div className='mb-8 rounded-lg bg-accent shadow-md'>
        {imageURL && (
          <div className='overflow-hidden rounded-t-lg'>
            <img src={imageURL} alt={title} className='w-full' />
          </div>
        )}
        <div className='p-6'>
          <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
          <div className='mb-4 flex items-center'>
            <p className='text-gray-500'>{date}</p>
            <p className='ml-4 text-gray-600'>{authorName}</p>
          </div>
          <p className='mb-4 text-gray-700'>{description}</p>
          <a
            href={link}
            className='inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'
          >
            Read more
          </a>
        </div>
      </div>
    )
  }
)

export default BlogPost
