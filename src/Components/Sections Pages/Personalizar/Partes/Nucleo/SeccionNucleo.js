import React from 'react'
import "./SeccionNucleo.css";

import eva from "../../../../../assets/ev.jpg";
import foam from "../../../../../assets/foam.jpg";

export default function SeccionNucleo({
  setLoading, nucleos
}) {

  const changeForm = (key, value) => {
    setLoading(true);
    localStorage.setItem(key, value);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }


  return (
    <div className="cont-seccion-rugoso">
      <h5 className="title-sections">
        Elige el nucleo de tu paleta Ideal !
      </h5>
      <ul className="ul-rugosos">
        <li  className="li-rugoso">
          <p>
            <span className="span-title">Eva</span>, <span className="span-sub"> Buena absorción de impactos </span>: tiene una capacidad notable para absorber y dispersar la energía de los impactos, lo que ayuda a reducir la vibración y la fatiga en la muñeca y el brazo del jugador{" "} <span className="span-sub"> Control del golpe </span> proporciona un buen control en los golpes, permitiendo a los jugadores tener una mayor precisión en sus tiros
          </p>
        </li>
        <li className="li-rugoso">
          <p>
            <span className="span-title">Foam </span> , <span className="span-sub"> Ligereza </span>:  La goma Foam es un material ligero, lo que facilita el movimiento rápido y la maniobrabilidad en la pista.{" "}  <span className="span-sub"> Buen rebote </span> Este material tiene un buen retorno de la pelota, lo que puede proporcionar un extra de potencia en los golpes
          </p>
        </li>
      </ul>
      <div class="options-rugosos">
        <div class="option-rugoso">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044428/ev_gyo66u.jpg"}
            alt=""
          />

          <label class="cyberpunk-checkbox-label">
            <input
              value={"Eva"}
              onChange={(e) => {
                changeForm("nucleo", e.target.value);
              }}
              type="checkbox"
              checked={nucleos === "Eva"}
              class="cyberpunk-checkbox"
            />
            Eva, $0
          </label>
        </div>
        <div class="option-rugoso">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044427/foam_jzdch5.jpg"}
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"Foam"}
              checked={nucleos === "Foam"}
              onChange={(e) => {
                changeForm("nucleo", e.target.value);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            Foam, $0
          </label>
        </div>
      </div>
    </div>
  )
}