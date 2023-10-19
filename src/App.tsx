// filename -App.js

import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
