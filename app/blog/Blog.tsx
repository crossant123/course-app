import React from 'react'
import BlogPost from './BlogPost'
import { describe } from 'node:test'

const BlogPosts = [
  {
    id: '1',
    title: 'First Day: Chicago',
    description:
      'I arrived in chicago at 9:10 AM. The weather was great! It was 79 and windy.',
    date: '2024-05-22',
    link: '',
    imageURL: '',
    authorName: 'Anthony Cross'
  },
  {
    id: '2',
    title:
      'Night One on the train: Dinner, Traveling with a Train expert, Programming',
    description: '',
    date: '2024-5-22',
    link: '',
    imageURL: '',
    authorName: 'Anthony Cross'
  }
]

export default function Blog() {
  return (
    <div className=''>
      {BlogPosts.map(post => (
        <BlogPost
          id={post.id}
          title={post.title}
          description={post.description}
          date={post.date}
          link={post.link}
          imageURL={post.imageURL}
          authorName={post.authorName}
        />
      ))}
    </div>
  )
}
