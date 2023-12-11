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

  const parseFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const anio = date.getFullYear();


    return dia + "/" + mes + "/" + anio ;
  };



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
              <div className="seguimiento-url">Link Seguimiento Andreani: {pedido.link ?
              <a href={pedido.link} target="_blank" rel="noopener noreferrer">Ver Seguimiento</a> : "No disponible"
            }</div>
              <div className="fechaCompra">Fecha Compra: {pedido.fecha}</div>
              <div className="pedido">Pedido : {pedido.pedido}</div>
            </div>
            <h5>Estados de tu pedido</h5>
            {pedido.estado.map((e) => {
              return (
                <div className="cont-estado">
                  <div className="estado">{
                    e.estado === "Enpaquetando" ? "Empaquetando" : e.estado
                  }</div>
                  <div className="fecha">
                    Ultima Actualizacion: {parseFecha(e.fecha)}
                  </div>
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
