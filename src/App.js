import "./App.css";
import "./Components/Header.js";
import Header from "./Components/Header.js";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import Footer from "./Components/Footer";
import { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

import { Routes, Route } from "react-router-dom";


function App() {

  const productos = useContext(GlobalContext);

  return (
    <div className="App">
      <Header />
      <SectionOne />

      <Routes>
        <Route path="/" element={<SectionTwo />} exact />
        <Route path="/productos" element={<SectionTwo />} exact />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
