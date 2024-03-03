import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { readIntell } from "../utility/crudUtility";

export const IntellContext = createContext();

export const IntellProvider = ({ children }) => {
  const [intells, setIntell] = useState([]);

  useEffect(() => {
    const unsubscribe = readIntell(setIntell);
    return () => unsubscribe();
  }, []);

  console.log(intells);

  return (
    <IntellContext.Provider value={{ intells }}>
      {children}
    </IntellContext.Provider>
  );
};
