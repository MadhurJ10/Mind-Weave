import React, { useContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { userContext } from './context/UserProvider'
import { fetchUserDetails } from './services/AuthService';

import ProtectedRoute from './pages/ProtectedRoute';
// import Home from './pages/Home';
import NavBar from './components/NavBar';


const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Chat = React.lazy(() => import('./pages/Chat'));
const Register = React.lazy(() => import('./pages/Register'));



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
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
};

export default App;
