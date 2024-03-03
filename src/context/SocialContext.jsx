import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { readSocial } from "../utility/crudUtility";

export const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  const [socials, setSocial] = useState([]);

  useEffect(() => {
    const unsubscribe = readSocial(setSocial);
    return () => unsubscribe();
  }, []);

  console.log(socials);

  return (
    <SocialContext.Provider value={{ socials }}>
      {children}
    </SocialContext.Provider>
  );
};
