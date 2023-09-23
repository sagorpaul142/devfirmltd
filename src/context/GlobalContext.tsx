"use client";
import React, {createContext, useState} from "react";
// @ts-ignore
export const GlobalContext = createContext();
export const GlobalContextProvider = ({children}:{children:React.ReactNode}) => {
  const [open, setOpen] = useState(true);

  return (
    <GlobalContext.Provider value={{ open, setOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};