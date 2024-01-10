import Image from 'next/image'

export default function Home() {
  return (
    <section id='home'>
      <section id='Hero' className='relative h-screen w-full'>
        <div className='absolute inset-0 z-[-1]'>
          <Image
            src={'/Winter_bench.jpg'}
            alt='Image of a Winter bench Taken by the Author'
            fill // Use the new 'fill' attribute
            className='pointer-events-none object-cover' // Apply object-fit styles via className
            style={{
              // Optional: you can still apply inline styles if needed
              position: 'absolute', // Required for 'fill'
              zIndex: -1 // Send the image to the background
            }}
            priority // Optional: if you want the image to be preloaded
          />
        </div>

        <div className=' absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-40'>
          <h3 className='text-3xl font-semibold text-white'>
            Creatively <span className=' text-primary'>Designed</span>, Highly
            Detailed Websites
          </h3>
          <h4 className='mt-4 text-xl font-medium text-white'>
            A <span className='text-primary'>design first</span> approach lets
            you fall in love with the pages we create
          </h4>

          <div className='mt-16 flex flex-row gap-6'>
            <button className='rounded-md bg-background px-3 py-2 text-text hover:-translate-y-1'>
              Learn More
            </button>
            <button className='rounded-md border border-background bg-primary px-3 py-2 text-text hover:-translate-y-1'>
              Sign Up
            </button>
          </div>
        </div>
      </section>
      <section id='Chapter1' className='h-screen w-full'></section>
      <section id='Chapter2' className='h-screen w-full'></section>
      <section id='cta' className='h-screen w-full'></section>
    </section>
  )
}
