import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pattern from './components/Pattern'
import HowItWorks from './components/HowItWorks'
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo'
import Faq from './components/Faq'
import { Routes, Route, Link } from "react-router-dom";
import Chat from './pages/Chat'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      {/* <NavBar/> */}
{/* 
      <Home/>
      <Pattern/>
      <HowItWorks/>
      <Faq/> */}
      {/* <InfiniteMovingCardsDemo/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />


      </Routes>

      

    </div>
  )
}

export default App
