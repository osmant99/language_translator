import React from "react";
import { Grid, Select, MenuItem } from "@mui/material";
import countries from "../countries";
const LangFrom = ({ TranslateFrom, setTransFrom }) => {
  return (
    <>
      <Grid item xs={6}>
        <Select
          label="Source Language"
          variant="outlined"
          value={TranslateFrom}
          onChange={(e) => setTransFrom(e.target.value)}
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

export default LangFrom;
