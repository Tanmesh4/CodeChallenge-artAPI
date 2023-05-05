import React from "react";
import "./App.css";
import { TableRow, ThemeProvider, Typography } from "@mui/material";
import theme from "./theme/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artwork/:objectNumber" element={<DetailsPage />} />
            </Routes>
          </>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
