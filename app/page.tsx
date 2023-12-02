import Image from 'next/image'

export default function Home() {
  return (
    <section className=''>
      <div className='container'>
        <section id='Hero' className='relative'>
          <div className=' absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-40'>
            <h3 className='text-3xl font-semibold text-white'>
              Creatively <span className=' text-emerald-400'>Designed</span>,
              Highly Detailed Websites
            </h3>
            <h4 className='mt-4 text-xl font-medium text-white'>
              A <span className=' text-emerald-400'>design first</span> approach
              lets you fall in love with the pages we create
            </h4>

            <div className='mt-16 flex flex-row gap-6'>
              <button className='bg-gray-950 px-3 py-2 text-white hover:-translate-y-1'>
                Learn More
              </button>
              <button className='border border-gray-950 px-3 py-2 text-white hover:-translate-y-1'>
                Sign Up
              </button>
            </div>
          </div>
          <Image
            src={'/Winter_bench.jpg'}
            height={720}
            width={1280}
            alt='Image of a Winter bench Taken by the Author'
            className='left-0 top-0 h-screen w-full border-4 object-cover'
          />
        </section>
        <section id='Chapter1'></section>
        <section id='Chapter2'></section>
        <section id='cta'></section>
      </div>
    </section>
  )
}
