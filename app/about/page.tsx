import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-4 w-60 rounded-md text-3xl font-bold text-text  dark:text-darktext'>
        About Me
      </h1>
      <p className=' text-sm italic text-text dark:text-darktext'>
        This section displays a short description of my education,
        qualifications, and experiences.
      </p>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
        {/* Project 1 */}
        <div
          className='rounded bg-secondary p-4 shadow-md dark:bg-darksecondary'
          id='timeline-container'
        >
          <div id='timeline-header'>
            {/* Think into adding icon next to header */}
            <h2 className=' text-lg font-semibold text-primary dark:text-primary'>
              Education:
            </h2>
            {/* Add date */}
          </div>
          <div className=' m-2' id='timeline-content'>
            {/* Add seperator details / design overarching timeline dots */}
            <h3 className=' text-md mb-1 font-medium text-text dark:text-text'>
              Bachelors Degree:
            </h3>
            <p className='text-text dark:text-darktext'>
              -I have a bachelors degree in Computer Information Systems from
              Davenport University.
              <br />
              -I studied programming fundamentals and learned multiple coding
              languages throughout my four-year degree.
              <br />
              -I worked with C# and the .Net Framework to create academic
              projects, such as Working store pages and APIs.
              <br />
              -I Learned HTML and CSS to create beautiful websites and studied
              local large companies website designs to imitate and replicate.
              <br />
              -Throughout University, I learned how to use 4 core languages
              <span> (C#, HTML/CSS, Java, SQL).</span>
              <br />
              -However, through Internship I learned Javascript and more Modern
              SQL practices and Alternatives.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className='rounded bg-secondary p-4 shadow-md dark:bg-secondary'
          id='timeline-container'
        >
          <div id='timeline-header'>
            {/* Think into adding icon next to header */}
            <h2 className=' text-lg font-semibold text-primary dark:text-primary'>
              Work Experience:
            </h2>
            {/* Add date */}
          </div>
          <div className=' mb-2' id='timeline-content'>
            {/* Add seperator details / design overarching timeline dots */}
            <h3 className=' text-md mb-1 font-medium text-text dark:text-darktext'>
              IT Documentation Specialist
            </h3>
            <p className=' mb-2 text-text dark:text-darktext'>
              -I Assist Tire Rack Project management and the IT support team in
              documenting Policy, Procedures, and Training.
            </p>
            <h3 className=' text-md mb-1 font-medium text-text dark:text-darktext'>
              Junior Web Developer
            </h3>
            <p className=' mb-2 text-text dark:text-darktext'>
              -I Created web pages, UI Designs, and updated Advertisement
              websites for IQS Directory.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className='rounded bg-secondary p-4 shadow-md dark:bg-darksecondary'
          id='timeline-container'
        >
          <div id='timeline-header'>
            {/* Think into adding icon next to header */}
            <h2 className=' text-2x1 mb-4 font-semibold text-primary dark:text-primary'>
              Certifications:{' '}
            </h2>
            {/* Add date */}
          </div>
          <div className=' mb-2' id='timeline-content'>
            {/* Add seperator details / design overarching timeline dots */}
            <h3 className=' text-md mb-2 font-medium'>
              2023 Smartscreen Certified
            </h3>
            <Image
              src={'/smartsheet_badge.png'}
              height={340}
              width={340}
              alt='Smartsheet Skills Core App Certification Badge'
              className=''
            />
            <p>
              <span className='text-primary'>Completed</span> 2023 Smartsheet
              core app Certification
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
