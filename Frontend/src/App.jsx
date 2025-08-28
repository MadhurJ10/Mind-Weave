import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Pattern from './components/Pattern';
import HowItWorks from './components/HowItWorks';
import { InfiniteMovingCardsDemo } from './components/InfiniteMovingCardsDemo';
import Faq from './components/Faq';
import Login from './pages/Login';
import Register from './pages/Register';



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBar /> */}

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {/* <Pattern /> */}
            {/* <HowItWorks /> */}
            {/* <Faq /> */}
            {/* <InfiniteMovingCardsDemo /> */}
          </>
        } />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </div>
  );
};

export default App;
