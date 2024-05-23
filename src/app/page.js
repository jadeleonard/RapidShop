

import Navbar from '@/components/pages/Navbar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar />


      <UserButton />
      </div>
  )
}

export default App
