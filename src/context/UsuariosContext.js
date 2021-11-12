import React, {createContext, useState} from 'react';
export const UsuariosContext = createContext();

export const UsuariosProvider = ({children}) => {
  
    const [login, setLogin] = useState()

  return (
    <UsuariosContext.Provider value={{login, setLogin}}>
      {children}
    </UsuariosContext.Provider>
  );
};