import React from "react";
import "./SeccionForma.css";

export default function SeccionForma({ formas, setLoading, setItems, items  }) {

  const changeForm = (key, value) => {
    setLoading(true);
    localStorage.setItem(key, value);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }

  return (
    <div className="cont-seccion-forma">
      <h5 className="title-sections">Elige la forma de tu paleta</h5>
      <ul className="ul-materiales">
        <li  className="li-materiales">
          <p>
            <span className="span-title">Redonda</span>, <span className="span-sub"> Ventajas </span>: Genera mas control y menos potencia, ideal para jugadores de nivel principiante e intermedio.{" "}
          </p>
        </li>
        <li className="li-materiales">
          <p>
            <span className="span-title">Diamante </span> , <span className="span-sub"> Ventajas </span>: Genera mas potencia y menos control, ideal para jugadores de nivel intermedio y avanzado que no quieren perder precision en el golpe y potencia{" "}
          </p>
        </li>
        <li className="li-materiales">
          <p>
          <span className="span-title">Lagrima</span>, <span className="span-sub"> Ventajas </span>: Genera mas potencia y control, ideal para jugadores de nivel intermedio y avanzado que no quieren perder la potencia sobre el control, es un balance entre las 3 formas{" "}
          </p>
        </li>
      </ul>
      <div className="options-formas">
        <div className="option-forma">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044428/FULL_CARBONO_REDONDO_sdih9v.png "
            alt=""
          />

          <label className="cyberpunk-checkbox-label">
            <input
              type="checkbox"
              value={"Redonda"}
              checked={formas === "Redonda"}
              className="cyberpunk-checkbox"
              onChange={(e) => {
                changeForm("forma", e.target.value);
              }}
            />
            Redonda
          </label>
        </div>
        <div className="option-forma">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044428/FULL_CARBONO_DIAMANTE_TIPO_ATOS_y4hffr.png"
            alt=""
          />

          <label className="cyberpunk-checkbox-label">
            <input
              value={"Diamante"}
              onChange={(e) => {
                changeForm("forma", e.target.value);
              }}
              type="checkbox"
              checked={formas === "Diamante"}
              className="cyberpunk-checkbox"
            />
            Diamante
          </label>
        </div>
        <div className="option-forma">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044429/FULL_CARBONO_DIAMANTE_v7ojrw.png"
            alt=""
          />
          <label className="cyberpunk-checkbox-label">
            <input
              value={"Lagrima"}
              checked={formas === "Lagrima"}
              onChange={(e) => {
                changeForm("forma", e.target.value);
              }}
              type="checkbox"
              className="cyberpunk-checkbox"
            />
            Lagrima
          </label>
        </div>
      </div>

    </div>
  );
}
