import "./App.css";
import React from "react";
import "./Components/Sections Pages/Header.js";
import Header from "./Components/Sections Pages/Header.js";
import SectionTwo from "./Components/Sections Pages/SectionTwo";
import SectionQuePalaComprar from "./Components/Sections Pages/SectionQuePalaComprar";

import Footer from "./Components/Sections Pages/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SectionTwo />} exact />
        <Route path="/que-pala-comprar" element={<SectionQuePalaComprar />} exact />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
