import React from "react";
import { Grid, MenuItem, InputLabel, Select } from "@mui/material";
import countries from "../countries";
const LangTo = ({ TranslateTo, setTransTo }) => {
  return (
    <>
      <Grid item xs={6}>
        <InputLabel>Target language</InputLabel>
        <Select
          label="Target Language"
          variant="outlined"
          value={TranslateTo}
          onChange={(e) => setTransTo(e.target.value)}
          fullWidth
        >
          {countries.map((country) => (
            <MenuItem value={country.code} key={country.id}>
              {country.lang}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </>
  );
};

export default LangTo;
