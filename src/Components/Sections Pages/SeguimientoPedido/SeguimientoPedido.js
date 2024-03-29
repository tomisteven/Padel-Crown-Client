import React, { useState } from "react";
import "./SeguimientoPedido.css";
import { Seguimiento } from "../../../api/seguimiento";

import { RotatingLines } from "react-loader-spinner";

const seguimiento = new Seguimiento();
export default function SeguimientoPedido() {
  const [pedido, setPedido] = useState(null);
  const [dni, setDni] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarPedido = async (dni) => {
    setLoading(true);
    if (dni === "") {
      setLoading(false);
      return setError("Debe ingresar un DNI para buscar el pedido.");
    } else {
      setError(null);
      const data = await seguimiento.findClients(dni);
      data.message ? setError(data.message) : setPedido(data);
      console.log(data);
      setLoading(false);
    }
  };

  const limpiar = () => {
    setPedido(null);
    setError(null);
    setDni("");
  };

  function formatearFecha(fechaString) {
    if (!fechaString) return "No hay Fecha";
    // Intenta parsear la fecha en formato "dd/mm/aaaa"
    var formatoDDMMYYYY = /^\d{2}\/\d{2}\/\d{4}$/;
    var formatoDDMMYYYY2 = /^\d{2}\/\d{1}\/\d{4}$/;
    if (formatoDDMMYYYY.test(fechaString) || formatoDDMMYYYY2.test(fechaString)) {
      return fechaString;
    }
    // Intenta parsear la fecha en formato predeterminado
    var fechaPredeterminada = new Date(fechaString);
    if (!isNaN(fechaPredeterminada.getDate())) {
      var diaPredeterminado = fechaPredeterminada.getDate();
      var mesPredeterminado = fechaPredeterminada.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11 en JavaScript
      var anioPredeterminado = fechaPredeterminada.getFullYear();

      return (
        diaPredeterminado +
        "/" +
        (mesPredeterminado < 10 ? "0" : "") +
        mesPredeterminado +
        "/" +
        anioPredeterminado
      );
    }

    // Si no se pudo parsear en ninguno de los formatos, devuelve null
    return null;
  }

  return (
    <div className="cont-seguimiento">
      <h1>Seguimiento de pedido</h1>
      <p>Ingrese su DNI</p>
      <input
        type="text"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="DNI"
      />
      <button className="buscar" onClick={() => buscarPedido(dni)}>
        {loading ? (
          <RotatingLines
            color="#fff"
            height={30}
            width={30}
            radius={30}
            margin={2}
          />
        ) : (
          "Buscar"
        )}
      </button>
      <button className="limpiar" onClick={() => limpiar()}>
        Limpiar Campos
      </button>

      <div
        className="cont-info-pedido"
        style={pedido || error ? { display: "flex" } : { display: "none" }}
      >
        {pedido && (
          <>
            <div className="info-pedido">
              <div className="cliente">{pedido.cliente}</div>
              <div className="seguimiento-url">
                Link Seguimiento Andreani:{" "}
                {pedido.link ? (
                  <a
                    href={pedido.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Seguimiento
                  </a>
                ) : (
                  "No disponible"
                )}
              </div>
              <div className="fechaCompra">Fecha Compra: {pedido.fecha}</div>
              <div className="pedido">Pedido : {pedido.pedido}</div>
            </div>
            <h5>Estados de tu pedido</h5>
            {pedido.estado.map((e, i) => {
              return (
                <div className="cont-estado">
                  <p> {i + 1} </p>
                  <div className="estado">
                    {e.estado === "Enpaquetando" ? "Empaquetando" : e.estado === "" ? "Confirmado en Fabrica" : e.estado}
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "gray",
                      textAlign: "right",
                      marginRight: "10px",
                    }}
                  >
                    {"Ultima Actualizacion: " + formatearFecha(e.fecha)}
                  </p>
                </div>
              );
            })}
          </>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
