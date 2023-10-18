import "./App.css";
import React from "react";
import "./Components/Sections Pages/Header/Header.js";
import Header from "./Components/Sections Pages/Header/Header.js";
import SectionTwo from "./Components/Sections Pages/SectionProducts/SectionTwo";
import SectionQuePalaComprar from "./Components/Sections Pages/QuePalaCompar/SectionQuePalaComprar";
import Nosotros from "./Components/Sections Pages/Nosotros/Nosotros";
import Revendedores from "./Components/Sections Pages/Revendedores/Revendedores";

import Footer from "./Components/Sections Pages/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import PersonalizarMain from "./Components/Sections Pages/Personalizar/PersonalizarMain";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SectionTwo />} exact />
        <Route path="/que-pala-comprar" element={<SectionQuePalaComprar />} exact />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/revendedores" element={<Revendedores />} />
        <Route path="/personalizar/paleta" element={<PersonalizarMain />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
