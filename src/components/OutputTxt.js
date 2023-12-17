import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { FaCopy } from "react-icons/fa";
const OutputTxt = ({
  outputText,
  setOutputText,
  fetchErr,
  handleCopyOutput,
}) => {
  return (
    <>
      <Grid item xs={6}>
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
        <FaCopy role="button" onClick={handleCopyOutput} />
      </Grid>
    </>
  );
};

export default OutputTxt;
