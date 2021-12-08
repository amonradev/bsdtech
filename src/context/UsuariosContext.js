import axios from 'axios';
import React, {createContext, useState} from 'react';
export const UsuariosContext = createContext();

export const UsuariosProvider = ({children}) => {
  
    const [dados, setDados] = useState({})
    const [flag, setFlag] = useState(0)
    
  return (
    <UsuariosContext.Provider value={{flag, setFlag, dados, setDados}}>
      {children}
    </UsuariosContext.Provider>
  );
};