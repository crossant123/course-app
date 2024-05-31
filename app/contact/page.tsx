import React from 'react'

function Page() {
  return (
    <div className='container mx-auto bg-background p-4'>
      <h1 className='mb-4 text-3xl text-primary'>Contact</h1>
      <form className='space-y-4'>
        <div>
          <label
            htmlFor='subject'
            className='mb-2 block text-sm font-medium text-secondary'
          >
            Subject:
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='block w-full rounded-md border-gray-300 bg-accent shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
            required
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-secondary'
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='block w-full rounded-md border-gray-300 bg-accent shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
            required
          />
        </div>
        <div>
          <label
            htmlFor='description'
            className='mb-2 block text-sm font-medium text-secondary'
          >
            Description (Max 150 chars):
          </label>
          <textarea
            id='description'
            name='description'
            className='block w-full rounded-md border border-gray-300 bg-accent shadow-sm focus:border-primary focus:ring-primary sm:text-sm'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Page
