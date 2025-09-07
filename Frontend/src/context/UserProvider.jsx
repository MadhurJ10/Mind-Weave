import React, { createContext } from 'react'
import { useState } from 'react';

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [ isUserValid, setIsUserValid ] = useState(false);


    return (
        <userContext.Provider
            value={{ isUserValid, setIsUserValid }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider
