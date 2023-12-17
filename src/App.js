import React, { useState } from "react";
import LanguageTranslator from "./components/LanguageTranslator";
import countries from "./countries";
const App = () => {
  // Filter Data from countries

  const filterTransFrom = countries.filter((country) => {
    return country.id === 1;
  });
  const filterTransTo = countries.filter((country) => {
    return country.id === 2;
  });

  // useState
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState(
    filterTransFrom[0].code
  );
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState(
    filterTransTo[0].code
  );
  const [loading, setLoading] = useState(false);
  const [fetchErr, setFetchErr] = useState(null);

  // api

  const api_URL = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${selectedSourceLanguage}|${selectedTargetLanguage}`;

  // fetch data

  const handleTranslate = async () => {
    try {
      setLoading(true);
      const response = await fetch(api_URL);
      if (!response.ok) throw Error("Did not receive expected data");
      const result = await response.json();
      const translatedText = result.responseData.translatedText;
      setOutputText(translatedText);
      setFetchErr(null);
    } catch (error) {
      console.log(error);
      setFetchErr(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleCopyOutput = () => {
    if (outputText) {
      navigator.clipboard
        .writeText(outputText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying text to clipboard:", error);
        });
    } else {
      console.warn("No text to copy");
    }
  };
  const handleCopyInput = () => {
    if (inputText) {
      navigator.clipboard
        .writeText(inputText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Error copying text to clipboard:", error);
        });
    } else {
      console.warn("No text to copy");
    }
  };
  return (
    <>
      <LanguageTranslator
        loading={loading}
        TranslateFrom={selectedSourceLanguage}
        TranslateTo={selectedTargetLanguage}
        setTransFrom={setSelectedSourceLanguage}
        setTransTo={setSelectedTargetLanguage}
        inputText={inputText}
        setInputText={setInputText}
        outputText={outputText}
        setOutputText={setOutputText}
        handleTranslate={handleTranslate}
        fetchErr={fetchErr}
        handleCopyOutput={handleCopyOutput}
        handleCopyInput={handleCopyInput}
      />
    </>
  );
};

export default App;
