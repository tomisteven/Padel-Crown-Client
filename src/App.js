import "./App.css";
import React from "react";
import "./Components/Sections Pages/Header/Header.js";
import Header from "./Components/Sections Pages/Header/Header.js";
import SectionTwo from "./Components/Sections Pages/SectionProducts/SectionTwo";
import SectionQuePalaComprar from "./Components/Sections Pages/QuePalaCompar/SectionQuePalaComprar";
import Nosotros from "./Components/Sections Pages/Nosotros/Nosotros";
import Revendedores from "./Components/Sections Pages/Revendedores/Revendedores";
 import TableClients from "./Components/Sections Pages/TableClients/TableClients.js";
import SeguimientoPedido from "./Components/Sections Pages/SeguimientoPedido/SeguimientoPedido";

import Footer from "./Components/Sections Pages/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import PersonalizarMain from "./Components/Sections Pages/Personalizar/PersonalizarMain";
import ProductsTable from "./Components/Sections Pages/TableClients/ProductsTable/ProductsTable.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SectionTwo />} exact />
        <Route
          path="/test"
          element={<SectionQuePalaComprar />}
          exact
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/revendedores" element={<Revendedores />} />
        <Route path="/personalizar/paleta" element={<PersonalizarMain />} />
        <Route path="/seguimiento" element={<SeguimientoPedido />} />
         <Route path="/admin/clientes" element={<TableClients />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/admin/productos" element={<ProductsTable />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
