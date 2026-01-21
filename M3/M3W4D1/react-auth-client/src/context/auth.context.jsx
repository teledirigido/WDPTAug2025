import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const AuthContext = React.createContext();
const API_URL = 'http://localhost:5005';

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  }

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    authenticateUser();
  }

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      axios.get(
        `${API_URL}/auth/verify`,
        { headers: { Authorization: `Bearer ${storedToken}`} }
      ).then( response => {
        setUser(response.data);
        setIsLoggedIn(true);
      }).catch( error => {
        console.log(error);
      })
    } else {
      setUser({});
      setIsLoggedIn(false);
    }
  }

  useEffect( () => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, isLoggedIn, storeToken, authenticateUser, user, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  )

}

export { AuthProviderWrapper, AuthContext };