import React from "react";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import { SizeContext } from "../context/SizeContext";
import RadioButtonsGroup from "./RadioButtonsGroup";

export const SizeCateg = ({ selectedProperties, setSelectedProperties }) => {
  const { sizes } = useContext(SizeContext);
  return (
    <Stack direction="row" spacing={1}>
      <RadioButtonsGroup
        label="Méretek"
        name="meretek"
        options={sizes}
        selectedProperties={selectedProperties}
        setSelectedProperties={setSelectedProperties}
      ></RadioButtonsGroup>
    </Stack>
  );
};
