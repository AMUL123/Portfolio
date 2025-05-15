import React from 'react'
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-blue-500 to-purple-600 text-white min-h-[90vh] flex items-center'>
      <div className='container mx-auto px-6 mb:px-12 lg:px-20 grid mb:grid-cols-2 gap-10 items-center'>
        {/*Left Content*/}
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Hi, I'm <span>Priyanshu Kumar</span>👋
          </h1>
          <p className='text-lg md:text-xl text-white/90'>
            I'm a passionate <span className='font-semibold'>Web Developer</span> focused on building interactive user experiences with modern web technologies.
          </p>

          {/* CTA Buttons */}

          <div className='space-x-4'>
            <a href='#projects'
              className='bg-yellow-400 text-blue-700 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105'
            >
              My Projects
            </a>
            <a href='#contact'
              className='bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105'
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/*Right Content*/}
        <div className='flex justify-center animate-slide-in'>
          <img src={profileImage} alt="profile" className='w-60 md:w-70 rounded-full shadow-lg border-4 border-yellow-400 transition-transform transform hover:scale-110'/>

        </div>
      </div>
    </section>
  )
}

export default Hero