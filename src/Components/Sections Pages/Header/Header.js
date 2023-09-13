import React from "react";
import "./Header.css";
import logo from "../../../assets/LOGO ACTUAL.webp";
import "./responsiveHeader.css";

const Header = () => {
  const scollEvent = (e) => {
    const position = window.pageYOffset;
    const header = document.querySelector(".header");
    if (position > 100) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  };

  window.addEventListener("scroll", scollEvent);

  return (
    <>
      <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/#productos" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item disable">
            <a href="/nosotros" className="nav-link">
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="/#productos" className="nav-link">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a href="#mayoristas" className="nav-link">
              Mayoristas
            </a>
          </li>
          <li className="nav-item">
            <a href="/revendedores" className="nav-link">
              Revendedores
            </a>
          </li>
          <li className="nav-item">
            <a href="/que-pala-comprar" className="nav-link">
              Que Pala Comprar ?
            </a>
          </li>
        </ul>
      </nav>
      </header>
    </>
  );
};

export default Header;

