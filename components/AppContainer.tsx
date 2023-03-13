"use client";
import React, { useState, useContext, createContext, Dispatch } from "react";
import { ThemeContext } from "./ThemeProvider";

interface AppProps {
  children: React.ReactNode;
}

type AppContext = {
  setIsBlur: Dispatch<React.SetStateAction<boolean>>;
};

const initialState: AppContext = {
  setIsBlur: () => {},
};

export const AppContext = createContext(initialState);

export const AppContainer = ({ children }: AppProps) => {
  const { theme } = useContext(ThemeContext);
  const [blur, setBlur] = useState<boolean>(false);

  return (
    <main
      className={`${theme} relative z-10 bg-main text-primary px-[25px] md:px-[200px] `}
    >
      <AppContext.Provider value={{ setIsBlur: setBlur }}>
        {children}
        {blur && (
          <div className="backdrop-blur-sm absolute top-0 right-0 left-0 bottom-0 z-20"></div>
        )}
      </AppContext.Provider>
    </main>
  );
};
