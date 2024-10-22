import React, { createContext, useState } from 'react';

export const AppContext = createContext({} as {user?: any, setUser?: any});

export const AppProvider = ({ children }: any) => {
    const [user, setUser] = useState({} as any)
  return (
    <AppContext.Provider value={{ user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};