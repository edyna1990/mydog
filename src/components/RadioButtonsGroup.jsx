import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { useEffect } from "react";

export default function RadioButtonsGroup({ label, options, name, selectedProperties, setSelectedProperties }) {
  
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    const updatedSelectedProperties = { ...selectedProperties, [name]: event.target.value };
    setSelectedProperties(updatedSelectedProperties);
  };
  useEffect(() => {
    setSelectedValue(selectedProperties[name]);
  }, [selectedProperties]);
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {options &&
          options.map((obj) => (
            <FormControlLabel
              checked={selectedValue === obj.name}
              key={obj.name}
              value={obj.name}
              control={<Radio />}
              label={obj.name}
              onChange={handleChange}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}
