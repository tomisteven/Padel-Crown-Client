import React, { useEffect } from "react";
import "./SectionOne.css";
import down from "../../assets/down.png";
import LoadBall from "../LoadBall";

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
      <LoadBall status={state ? "flex" : "none"} />
      <section id="home" className="first-section">
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

          <div className="down-div">
            <a href="#productos">
              <img src={down} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
