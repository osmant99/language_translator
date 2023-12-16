// src/LanguageTranslator.js
import React, { useState } from "react";
import { TextField, Typography, Container, Grid, Paper } from "@mui/material";
import TranslateBtn from "./TranslateBtn";
import OutputTxt from "./OutputTxt";
import LangFrom from "./LangFrom";
import LangTo from "./LangTo";

const LanguageTranslator = ({
  loading,
  TranslateFrom,
  TranslateTo,
  setTransFrom,
  setTransTo,
  inputText,
  setInputText,
  outputText,
  setOutputText,
  handleTranslate,
  fetchErr,
}) => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Language Translator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Enter text to translate"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Grid>
          <LangFrom TranslateFrom={TranslateFrom} setTransFrom={setTransFrom} />
          <LangTo TranslateTo={TranslateTo} setTransTo={setTransTo} />
          <TranslateBtn
            loading={loading}
            inputText={inputText}
            handleTranslate={handleTranslate}
          />
          <OutputTxt
            outputText={outputText}
            setOutputText={setOutputText}
            fetchErr={fetchErr}
          />
        </Grid>
      </Paper>
    </Container>
  );
};

export default LanguageTranslator;
