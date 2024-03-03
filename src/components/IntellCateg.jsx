import React from "react";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import { IntellContext } from "../context/IntellContext";
import RadioButtonsGroup from "./RadioButtonsGroup";

export const IntellCateg = ({ selectedProperties, setSelectedProperties }) => {
  const { intells } = useContext(IntellContext);
  return (
    <Stack direction="row" spacing={1}>
      <RadioButtonsGroup
        label="Intelligencia"
        name="intelligenciak"
        options={intells}
        selectedProperties={selectedProperties}
        setSelectedProperties={setSelectedProperties}
      ></RadioButtonsGroup>
    </Stack>
  );
};
