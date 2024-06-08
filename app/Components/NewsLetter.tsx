import React from 'react'

interface NewsLetterProps {}

const NewsLetter: React.FC<NewsLetterProps> = () => {
  return (
    <section className='not-prose'>
      <div className='rounded bg-sky-500 p-6 text-text'>
        <p className='text-base font-medium'>Subscribe to NewsLetter</p>
      </div>
    </section>
  )
}

export default NewsLetter
