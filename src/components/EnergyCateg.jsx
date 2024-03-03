import React from "react";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import { EnergyContext } from "../context/EnergyContext";
import RadioButtonsGroup from "./RadioButtonsGroup";

export const EnergyCateg = ({ selectedProperties, setSelectedProperties }) => {
  const { energies } = useContext(EnergyContext);
  return (
    <Stack direction="row" spacing={1}>
      <RadioButtonsGroup
        label="Energia"
        name="energiak"
        options={energies}
        selectedProperties={selectedProperties}
        setSelectedProperties={setSelectedProperties}
      ></RadioButtonsGroup>
    </Stack>
  );
};
