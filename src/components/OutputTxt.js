import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
const OutputTxt = ({ outputText, setOutputText, fetchErr }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          label="Translated Text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={fetchErr ? fetchErr : outputText}
          onChange={(e) => setOutputText(e.target.value)}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
    </>
  );
};

export default OutputTxt;
