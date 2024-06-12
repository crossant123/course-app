import Image from 'next/image'
import Link from 'next/link'

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
      <section
        id='Chapter1'
        className='flex h-screen w-full flex-col items-center justify-around md:flex-row'
      >
        <div className='m-4 text-center'>
          {/* <Image></Image> */}
          <h2 className='mb-2 text-2xl font-bold'>Email</h2>
          <p className='mb-2'>
            Connect with me through one of the following methods.
          </p>
          <p>
            <a
              href='mailto:crossant123@gmail.com'
              className='text-blue-500 hover:text-blue-700'
            >
              Contact me!
            </a>
          </p>
        </div>
        <div className='m-4 text-center'>
          {/* <Image></Image> */}
          <h2 className='mb-2 text-2xl font-bold'>Phone</h2>
          <p className='mb-2'>
            Connect with me through one of the following methods.
          </p>
          <p>
            <a
              href='tel:6161234567'
              className='text-blue-500 hover:text-blue-700'
            >
              (616) 123-4567
            </a>
          </p>
        </div>
        <div className='m-4 text-center'>
          {/* <Image></Image> */}
          <h2 className='mb-2 text-2xl font-bold'>Office</h2>
          <p className='mb-2'>
            Connect with me through one of the following methods.
          </p>
          <p>
            <a href='#' className='text-blue-500 hover:text-blue-700'>
              Link to Approximate and Work Hours
            </a>
          </p>
        </div>
      </section>
      <section
        id='Chapter2'
        className='flex h-screen w-full flex-col items-center justify-center overflow-hidden border-2 border-gray-700 md:flex-row-reverse'
      >
        <div className='p-4 md:w-1/2'>
          <Image
            src={'/NetflixProjectImage.jpg'}
            width={500}
            height={500}
            alt='Netflix Clone Project'
            className='h-auto w-full'
          />
        </div>
        <div className='rounded-md bg-primary p-4 md:w-1/2'>
          <h2 className='mb-4 text-3xl font-bold'>
            Unleash the Power of Streaming: A Netflix Clone Masterpiece
          </h2>
          <p className='mb-8 text-lg'>
            Crafted with the cutting-edge Next.js framework, this Netflix clone
            harnesses the robustness of Firebase for seamless authentication and
            real-time data synchronization. Powered by Stripe's secure payment
            gateway, it offers a smooth and reliable subscription experience.
            Immerse yourself in a world of entertainment, where the latest
            movies and shows are just a click away.
          </p>
        </div>
      </section>
      <section id='cta' className='flex h-1/2 w-full flex-col md:flex-row'>
        <div className='p-4 md:w-2/5'>
          <Image src='/logo.svg' alt='Logo' width={100} height={100} />
          <h3 className='mb-4 text-2xl font-bold'>Stay Updated</h3>
          <form className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='mb-2 rounded border border-gray-300 p-2'
            />
            <button
              type='submit'
              className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
            >
              Subscribe
            </button>
          </form>
          <p className='mt-4'>
            Join our newsletter to receive updates and exclusive offers.
          </p>
        </div>
        <div className='flex flex-col md:w-3/5 md:flex-row'>
          <div className='p-4 md:w-1/3'>
            <h2 className='mb-2 text-xl font-bold'>Column 1</h2>
            <ul className='list-none'>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
            </ul>
          </div>
          <div className='p-4 md:w-1/3'>
            <h2 className='mb-2 text-xl font-bold'>Column 2</h2>
            <ul className='list-none'>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
            </ul>
          </div>
          <div className='p-4 md:w-1/3'>
            <h2 className='mb-2 text-xl font-bold'>Follow me on:</h2>
            <ul className='list-none'>
              <li className='mr-2'>
                <Image
                  src='/threads-logo.svg'
                  alt='Threads'
                  width={24}
                  height={24}
                />
              </li>
              <li className='mr-2'>
                <Image
                  src='/instagram-logo.svg'
                  alt='Instagram'
                  width={24}
                  height={24}
                />
              </li>
              <li className='mr-2'>
                <Image
                  src='/linkedin-logo.svg'
                  alt='LinkedIn'
                  width={24}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src='/youtube-logo.svg'
                  alt='YouTube'
                  width={24}
                  height={24}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}
