import React, { useContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Lenis from '@studio-freight/lenis';

import { userContext } from './context/UserProvider';
import { fetchUserDetails } from './services/AuthService';

import ProtectedRoute from './pages/ProtectedRoute';
import NavBar from './components/NavBar';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Chat = React.lazy(() => import('./pages/Chat'));
const Register = React.lazy(() => import('./pages/Register'));

const App = () => {
  const { setIsUserValid } = useContext(userContext);

  // ✅ Lenis Smooth Scroll

  // ✅ Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await fetchUserDetails();
        // console.log("Fetched User:", user);
        setIsUserValid(!!user);
      } catch (error) {
        setIsUserValid(false);
      }
    };

    fetchUser();
  }, [setIsUserValid]);

  return (
    <div className="flex flex-col">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
