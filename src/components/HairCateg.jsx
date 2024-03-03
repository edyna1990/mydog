import React from "react";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import { HairContext } from "../context/HairContext";
import RadioButtonsGroup from "./RadioButtonsGroup";

export const HairCateg = ({ selectedProperties, setSelectedProperties }) => {
  const { hairs } = useContext(HairContext);
  return (
    <Stack direction="row" spacing={1}>
      <RadioButtonsGroup
        label="Szőrzet"
        name="szorzetek"
        options={hairs}
        selectedProperties={selectedProperties}
        setSelectedProperties={setSelectedProperties}
      ></RadioButtonsGroup>
    </Stack>
  );
};
