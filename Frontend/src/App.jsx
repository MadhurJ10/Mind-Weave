import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pattern from './components/Pattern'
import HowItWorks from './components/HowItWorks'
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo'
import Faq from './components/Faq'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
      {/* <NavBar/> */}

      <Home/>
      <Pattern/>
      <HowItWorks/>
      {/* <InfiniteMovingCardsDemo/> */}
      <Faq/>

      

    </div>
  )
}

export default App
