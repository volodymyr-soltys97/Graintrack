import { Link } from '@tanstack/react-router';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='p-2 flex gap-4 justify-center bg-gradient-to-r from-orange-500 to-yellow-500'>
      <Link to='/' className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
        Home
      </Link>
      <Link to='/login' className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
        Login
      </Link>
    </header>
  )
}

export default Header