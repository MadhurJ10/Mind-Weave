import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pattern from './components/Pattern'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      {/* <NavBar/> */}

      <Home/>
      <Pattern/>
      <HowItWorks/>
      

    </div>
  )
}

export default App
