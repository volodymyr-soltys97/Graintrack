import { createLazyFileRoute } from '@tanstack/react-router'
import Login from '../features/auth/Login'

export const Route = createLazyFileRoute('/login')({
  component: () => <Login />,
})
