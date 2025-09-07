import React, { useContext } from 'react'
import { userContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { isUserValid, setIsUserValid } = useContext(userContext);

    if (!isUserValid) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute
