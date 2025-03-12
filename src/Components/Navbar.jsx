import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-blue-500 text-white p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>My Portfolio</h1>

        {/*Desktop Menu*/}
        <ul className='hidden md:flex  space-x-6'>
          <li className='hover:text-gray-300 cursor-pointer'>Home</li>
          <li className='hover:text-gray-300 cursor-pointer'>Projects</li>
          <li className='hover:text-gray-300 cursor-pointer'>About</li>
          <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
        </ul>

        {/*Mobile Menu Button*/}
        <div className='mb:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖️' : '☰'}
        </div>
      </div>
      {/*Mobile Menu DropDown*/}
      {isOpen && (
        <ul className='md:hidden bg-blue-400 text-center space-y-2 py-4'>
        <li className='hover:text-gray-300 cursor-pointer'>Home</li>
        <li className='hover:text-gray-300 cursor-pointer'>Projects</li>
        <li className='hover:text-gray-300 cursor-pointer'>About</li>
        <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
      </ul>
      )}
    </nav>

  );
};

export default Navbar