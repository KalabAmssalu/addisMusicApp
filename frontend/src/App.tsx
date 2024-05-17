import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#000",
    text: "#fff",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
