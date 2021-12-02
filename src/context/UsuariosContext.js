import axios from 'axios';
import React, {createContext, useState} from 'react';
export const UsuariosContext = createContext();

export const UsuariosProvider = ({children}) => {
  
    const [flag, setFlag] = useState()
    
  return (
    <UsuariosContext.Provider value={{flag, setFlag}}>
      {children}
    </UsuariosContext.Provider>
  );
};