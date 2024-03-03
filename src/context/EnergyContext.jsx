import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { readEnergy } from "../utility/crudUtility";

export const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  const [energies, setEnergy] = useState([]);

  useEffect(() => {
    const unsubscribe = readEnergy(setEnergy);
    return () => unsubscribe();
  }, []);

  console.log(energies);

  return (
    <EnergyContext.Provider value={{ energies }}>
      {children}
    </EnergyContext.Provider>
  );
};
