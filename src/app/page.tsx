import React from 'react'
import Hero from './Components/hook/Hero'
import CardForm from '@/components/Card'

const App = () => {
  return (
    <div>
      <nav>


      </nav>
      <main>
        <div className='py-10'>
      <Hero />
      </div>
      <CardForm name='Card' price='2424' header='Header' content='ada' sold='1.2k'/>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default App
