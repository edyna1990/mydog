import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { readSize } from "../utility/crudUtility";

export const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
  const [sizes, setSize] = useState([]);

  useEffect(() => {
    const unsubscribe = readSize(setSize);
    return () => unsubscribe();
  }, []);

  console.log(sizes);

  return (
    <SizeContext.Provider value={{ sizes }}>
      {children}
    </SizeContext.Provider>
  );
};
