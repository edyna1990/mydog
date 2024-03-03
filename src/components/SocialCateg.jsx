import React from "react";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import { SocialContext } from "../context/SocialContext";
import RadioButtonsGroup from "./RadioButtonsGroup";

export const SocialCateg = ({ selectedProperties, setSelectedProperties }) => {
  const { socials } = useContext(SocialContext);
  return (
    <Stack direction="row" spacing={1}>
      <RadioButtonsGroup
        label="Szociális"
        name="szocialisigenyek"
        options={socials}
        selectedProperties={selectedProperties}
        setSelectedProperties={setSelectedProperties}
      ></RadioButtonsGroup>
    </Stack>
  );
};
