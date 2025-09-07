import React, { useContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Chat from './pages/Chat';

import Login from './pages/Login';
import Register from './pages/Register';
import { fetchUserDetails } from './services/AuthService';
import { userContext } from './context/UserProvider'
import ProtectedRoute from './pages/ProtectedRoute';





const App = () => {
  const { isUserValid, setIsUserValid } = useContext(userContext);

  useEffect(() => {
    const fetchUser = async () => {
      // setIsLoading(true);
      try {
        const user = await fetchUserDetails();
        console.log("Fetched User:", user);
        if (!user) {
          setIsUserValid(false);
        } else {
          // setUserDetails(user);
          setIsUserValid(true);
          // console.log(user.vaultPassword)
        }
      } catch (error) {
        // console.error('Error fetching user details:', error);
        setIsUserValid(false);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchUser();
  }, [ setIsUserValid ]);
  return (
    <div className="flex flex-col ">

      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Home />
            {/* <HowItWorks /> */}
          </>
        } />
        <Route path="/chat" element={
          <ProtectedRoute>
            <Chat/>
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </div>
  );
};

export default App;
