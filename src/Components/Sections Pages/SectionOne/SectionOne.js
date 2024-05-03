import React, { useEffect } from "react";
import "./SectionOne.css";
import down from "../../../assets/down.webp";
import LoadBall from "../../LoadBall";
import fondo_g from "../../../assets/fondox.webp"
import fondo_m from "../../../assets/fondo_m.webp"

export default function SectionOne() {
  const [state, setState] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 1000);

    const title = document.querySelector(".title-f");
    const subtitle = document.querySelector(".subtitle");
    const startButton = document.querySelector(".start-button");

    title.classList.add("animate-left");
    subtitle.classList.add("animate-left");
    startButton.classList.add("animate-left");

    return () => {
      title.classList.remove("animate-left");
      subtitle.classList.remove("animate-left");
      startButton.classList.remove("animate-left");
    };
  }, []);
  return (
    <>
      <LoadBall title={"Padel Crown"} status={state ? "flex" : "none"} />
      <section id="home" className="first-section" style={
        window.innerWidth < 768 ? {backgroundImage:`url(${fondo_m})` } : {backgroundImage: `url(${fondo_g})`}
      }>
        <div className="content">
          <h1 className="title-f">Bienvenido a Padel Crown!</h1>
          <h2 className="subtitle">
            Somos una empresa dedicada a la comercializacion y fabricacion de
            paletas de padel de alta gama, con los mejores materiales y diseños.
            Adquiri tu paleta de padel en nuestra tienda online o por mayor
            contactandonos por whatsapp.
          </h2>
          <button className="start-button">
            <a className="a-button" href="#productos">
              Ver Catalogo
            </a>
          </button>
          <button className="start-button-r">
            <a className="a-button-r" href="/rifas">
              Ver RIFAS
            </a>
          </button>
          <button className="start-button-m">
            <a className="a-button-m" href="https://articulo.mercadolibre.com.ar/MLA-1491186324-paleta-de-padel-fg-atos-full-carbono-diamante-tipo-nox-_JM#position=28&search_layout=stack&type=item&tracking_id=e61072f9-3e06-4115-83c2-33099df4ea25">
              Ver en Mercado Libre
            </a>
          </button>

          <div className="down-div">
            Hace Click aca y encontra la paleta ideal para vos!
            <a href="#productos">
              <img src={down} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
