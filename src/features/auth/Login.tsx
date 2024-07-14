import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import { AuthService } from '../../core/AuthService';

interface LoginProps {
  authService?: AuthService;
}

const Login: React.FC<LoginProps> = ({ authService }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const authService = container.resolve(AuthService);
  console.log(authService)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authService) {
      const success = await authService.login(username, password);
      if (success) {
        // navigate('/');
        console.log('test')
      } else {
        alert('Login failed');
      }
    }
    setPassword('');
    setUsername('')
  };

  return (
    <article className='flex justify-center gap-5 pt-20 min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500'>
      <form onSubmit={handleSubmit} className='flex gap-2 flex-col  w-80'>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Login"
          required
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
          className='w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        />
        <button
          type='submit'
          className='w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Login
        </button>
      </form>
    </article>
  );
};

export const Route = createFileRoute('/login')({
  component: Login,
})

export default Login;
