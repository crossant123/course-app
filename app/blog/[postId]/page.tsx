import React from 'react'
import { getPostByPostId } from '../../lib/posts/post'

interface Params {
  postId: string
}

export interface Frontmatter {
  title: string
  Author: string
}

const page = async ({ params }: { params: Params }) => {
  const { postId } = params

  const { content, frontmatter } = await getPostByPostId(postId)

  return (
    <section className='py-24'>
      <div className='mb-4 py-2'>
        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='text-sm font-light uppercase leading-4'>
            {frontmatter.Author}
          </p>
        </header>

        {/*Post content */}
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default page
