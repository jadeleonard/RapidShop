

import Hero from '@/components/Hero'
import Navbar from '@/components/pages/Navbar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar />


      <Hero />
      </div>
  )
}

export default App
