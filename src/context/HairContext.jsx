import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { readHair } from "../utility/crudUtility";

export const HairContext = createContext();

export const HairProvider = ({ children }) => {
  const [hairs, setHair] = useState([]);

  useEffect(() => {
    const unsubscribe = readHair(setHair);
    return () => unsubscribe();
  }, []);

  console.log(hairs);

  return (
    <HairContext.Provider value={{ hairs }}>
      {children}
    </HairContext.Provider>
  );
};
