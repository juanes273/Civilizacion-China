import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [categoria, setCategoria] = useState('inciial')

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername, categoria, setCategoria }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
