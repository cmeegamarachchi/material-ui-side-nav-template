import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </>
  );
};

export default App;
