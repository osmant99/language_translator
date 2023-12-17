import React from "react";
import { CircularProgress, Button, Grid } from "@mui/material";
const TranslateBtn = ({ loading, inputText, handleTranslate }) => {
  return (
    <>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading || !inputText}
          onClick={handleTranslate}
        >
          {loading ? (
            <>
              <CircularProgress size={24} color="inherit" />
              <span style={{ marginLeft: "8px" }}>Translating...</span>
            </>
          ) : (
            "Translate"
          )}
        </Button>
      </Grid>
    </>
  );
};

export default TranslateBtn;
