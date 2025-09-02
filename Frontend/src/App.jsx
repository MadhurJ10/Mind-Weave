import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Chat from './pages/Chat';

import Login from './pages/Login';
import Register from './pages/Register';
import Testaskai from './components/Testaskai';




const App = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Routes>
        <Route path="/" element={
          <>
          <NavBar />
            <Home />
            {/* <HowItWorks /> */}
          </>
        } />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/testai" element={<Testaskai />} />

      </Routes>
    </div>
  );
};

export default App;
