import "./App.css";
import React, { useEffect, useState } from "react";
import "./Components/Header.js";
import Header from "./Components/Header.js";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import Footer from "./Components/Footer";
import LoadBall from "./Components/LoadBall.js";

import { Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
     setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <LoadBall />
      </div>
    );
  }

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
