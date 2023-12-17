// src/LanguageTranslator.js
import React, { useState } from "react";
import { TextField, Typography, Container, Grid, Paper } from "@mui/material";
import TranslateBtn from "./TranslateBtn";
import OutputTxt from "./OutputTxt";
import LangFrom from "./LangFrom";
import LangTo from "./LangTo";
import { FaCopy } from "react-icons/fa";

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
  handleCopyOutput,
  handleCopyInput,
}) => {
  return (
    <>
      <Container component="main" maxWidth="md">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Language Translator
          </Typography>
          <Grid container spacing={3}>
            <Grid className="input_copy" item xs={6}>
              <TextField
                label="Enter text to translate"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <FaCopy role="button" onClick={handleCopyInput} />
            </Grid>

            <OutputTxt
              outputText={outputText}
              setOutputText={setOutputText}
              fetchErr={fetchErr}
              handleCopyOutput={handleCopyOutput}
            />

            <LangFrom
              TranslateFrom={TranslateFrom}
              setTransFrom={setTransFrom}
            />
            <LangTo TranslateTo={TranslateTo} setTransTo={setTransTo} />

            <TranslateBtn
              loading={loading}
              inputText={inputText}
              handleTranslate={handleTranslate}
            />
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default LanguageTranslator;
