
import DropDown from '@/components/DropDown'
import Hero from '@/components/Hero'
import Navbar from '@/components/pages/Navbar'

import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar />

      <div className='p-4 sm:p-9'>
      <Hero />
      </div>




      <DropDown />
      </div>
  )
}

export default App
