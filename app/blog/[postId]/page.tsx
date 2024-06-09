import React from 'react'
import Link from 'next/link'
import { getPostByPostId } from '../../lib/posts/post'

interface Params {
  postId: string
}

export interface Frontmatter {
  Title: string
  Author: string
}

const page = async ({ params }: { params: Params }) => {
  const { postId } = params

  const { content, frontmatter } = await getPostByPostId(postId)

  return (
    <section className='py-12'>
      <div className='mx-6 mb-4 px-8 py-2'>
        <header className='rounded  p-8'>
          <h1 className='text-3xl font-bold '>{frontmatter?.Title}</h1>
          <p className='text-sm  '>{frontmatter?.Author}</p>
        </header>

        {/*Post content */}
        <main className='prose dark:prose-invert mt-12'>{content}</main>
        <div className='mt-8 flex items-center justify-between'>
          <Link href='/blog'>
            <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
              Back to Blog
            </span>
          </Link>
          {/* Add any additional navigation or actions here */}
        </div>
      </div>
    </section>
  )
}

export default page
