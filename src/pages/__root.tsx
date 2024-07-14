import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-4 justify-center bg-gradient-to-r from-orange-500 to-yellow-500'>
        <Link to='/' className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
          Home
        </Link>{' '}
        <Link to='/login' className='text-gray-700 hover:text-blue-500 transition-colors duration-300'>
          Login
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})