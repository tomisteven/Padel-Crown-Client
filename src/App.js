import "./App.css";
import React from "react";
import "./Components/Sections Pages/Header/Header.js";
import Header from "./Components/Sections Pages/Header/Header.js";
import SectionTwo from "./Components/Sections Pages/SectionProducts/SectionTwo";
import SectionQuePalaComprar from "./Components/Sections Pages/QuePalaCompar/SectionQuePalaComprar";
import Nosotros from "./Components/Sections Pages/Nosotros/Nosotros";

import Footer from "./Components/Sections Pages/Footer/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SectionTwo />} exact />
        <Route path="/que-pala-comprar" element={<SectionQuePalaComprar />} exact />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
