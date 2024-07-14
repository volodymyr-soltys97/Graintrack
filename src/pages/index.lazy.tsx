import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='p-2 min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500 text-center'>
      <h3 className='text-white-700'>Hello World!</h3>
    </div>
  )
}