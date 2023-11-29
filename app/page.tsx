import Image from 'next/image'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <section id='Hero'>
          {/* <Image></Image> */}
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-3xl font-semibold'>
              Creatively Designed, Highly Detailed Websites
            </h3>
            <h4 className='mt-4 text-xl font-medium'>
              A design first approach lets you fall in love with the pages we
              create
            </h4>
            <div className='mt-16 flex flex-row gap-6'>
              <button className='bg-gray-950 px-3 py-2 text-white'>
                Learn More
              </button>
              <button className='border border-gray-950 px-3 py-2 text-black'>
                Sign Up
              </button>
            </div>
          </div>
        </section>
        <section id='Chapter1'></section>
        <section id='Chapter2'></section>
        <section id='cta'></section>
      </div>
    </section>
  )
}
