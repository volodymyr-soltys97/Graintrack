import React from 'react';
import { IButton } from '../app/types/ui_kit';

const Button: React.FC<IButton> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      className='w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 duration-300'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button