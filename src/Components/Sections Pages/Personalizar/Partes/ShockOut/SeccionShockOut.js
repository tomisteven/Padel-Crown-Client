import React from 'react'
import "./SeccionShockOut.css";

export default function SeccionShockOut({
  setLoading, shockOuts
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
      <ul className="ul-shocks">
        <li  className="li-shock">
          <p>
            <span className="span-title-s">Balance</span>: Modifica el balance de la paleta al medio, lo que permite un mejor control de la pelota y una mayor maniobrabilidad en la pista. Cada shock out pesa 0.5 Gramos{" "} <span className="span-sub"> Precio $5000</span>
          </p>
        </li>
        <li className="li-shock">
          <p>
            <span className="span-title-s">Control </span>: <span className="span-sub"> Modifica el balance de la paleta al mango </span>:  lo que facilita el movimiento rápido y la maniobrabilidad en la pista.{" "}  <span className="span-sub"> Precio $5000</span>
          </p>
        </li>
        <li className="li-shock">
          <p>
            <span className="span-title-s">Power </span>: <span className="span-sub"> Modifica el balance de la paleta a la cabeza </span>:  lo que facilita la potencia de la paleta al situar el peso en la punta.{" "}  <span className="span-sub"> Precio $5000</span>
          </p>
        </li>
      </ul>

      <h3>Solo seleccionar si lo desea!</h3>
      <div class="options-shocks">
        <div class="option-shock">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044427/balance_mw3h5f.png"}
            alt=""
          />

          <label class="cyberpunk-checkbox-label">
            <input
              value={"Balance"}
              onChange={(e) => {
                changeForm("shockOut", e.target.value);
                localStorage.setItem("precioShockOut", 5000);
              }}
              type="checkbox"
              checked={shockOuts === "Balance"}
              class="cyberpunk-checkbox"
            />
            Balance, $5000
          </label>
        </div>
        <div class="option-shock">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044427/control_yelwtf.png"}
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"Control"}
              checked={shockOuts === "Control"}
              onChange={(e) => {
                changeForm("shockOut", e.target.value);
                localStorage.setItem("precioShockOut", 5000);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            Control, $5000
          </label>
        </div>
        <div class="option-shock">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044428/power_zrnzsx.png"}
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"Power"}
              checked={shockOuts === "Power"}
              onChange={(e) => {
                changeForm("shockOut", e.target.value);
                localStorage.setItem("precioShockOut", 5000);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            Power, $5000
          </label>
        </div>
        <div class="option-shock">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697638369/Dise%C3%B1o_sin_t%C3%ADtulo_2_tvzx1e.png"}
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"Sin ShockOuts"}
              checked={shockOuts === "Sin ShockOuts"}
              onChange={(e) => {
                changeForm("shockOut", e.target.value);
                localStorage.setItem("precioShockOut", 0);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            Sin ShockOuts, $0
          </label>
        </div>
      </div>
    </div>
  )
}
