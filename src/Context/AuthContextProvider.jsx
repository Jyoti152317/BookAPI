import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const [isAuthenticate, setAuthenticate] = useState(() => {
        return localStorage.getItem("token") ? true : false
    });
    const [token, setToken] = useState(null);

    const navigate = useNavigate();
    const { location } = useLocation();
    const login = (authToken) => {
        setAuthenticate(true);
        setToken(authToken);
        localStorage.setItem('token', authToken);
        navigate(location.state.form ||"/")
    }

    const logout = () => {
        
        setToken(null);
        setAuthenticate(false);
        localStorage.removeItem(token);
        navigate("/login")
    }

   
  return (
      <AuthContext.Provider value={{token,login,logout,isAuthenticate}}>
          {children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider