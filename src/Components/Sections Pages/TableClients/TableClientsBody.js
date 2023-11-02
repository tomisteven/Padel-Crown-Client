import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { RotatingLines } from "react-loader-spinner";
import Modales from "./Modales/IndexModales.js";

export default function TableClientsBody({
  clientesState,
  loading,
  deleteClient,
  changeState,
  state,
  setOpenCreate,
  openCreate,
}) {
  const [openVer, setOpenVer] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openSeguimiento, setOpenSeguimiento] = useState(false);
  const [client, setClient] = useState({});

  const generateColorState = (estado) => {
    switch (estado) {
      case "Pendiente":
        return { backgroundColor: "#ff9800" };
      case "Confirmado":
        return { backgroundColor: "#795548" };
      case "En Fabricacion":
        return { backgroundColor: "#2196f3" };
      case "En Secado":
        return { backgroundColor: "#6ea5ff" };
      case "Ultimando Detalles en Fabrica":
        return { backgroundColor: "#9c27b0" };
      case "Enviado a Local de Padel Crown":
        return { backgroundColor: "#2F80ED" };
      case "Empaquetando":
        return { backgroundColor: "#616161" };
      case "Cancelado":
        return { backgroundColor: "#f44336" };
      case "Enviado":
        return { backgroundColor: "#00bcd4" };
      case "Devolucion":
        return { backgroundColor: " #ff5722" };
      case "Entregado":
        return { backgroundColor: "#219663" };
      default:
        return { backgroundColor: "#ffaa00" };
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th> Id</th>
            <th> Nombre</th>
            <th className="td-bold-th"> Producto</th>
            <th> Fecha</th>
            <th> Estado</th>
            <th className="valores-precios-th"> Precio</th>
            <th className="valores-precios-th"> Costo</th>
            <th className="valores-precios-th"> Envio</th>
            <th className="valores-precios-th"> Carbono</th>
            <th> Acciones</th>
            <th className="th-ganancia">Ganancia</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="loader-cont">
              <RotatingLines
                className="loader"
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="80"
                visible={true}
              />
            </div>
          ) : clientesState.length === 0 ? (
            <tr>
              <td
                style={{
                  textAlign: "center",
                  height: "500px",
                  fontSize: "20px",
                }}
                colSpan={10}
              >
                No hay clientes
              </td>
            </tr>
          ) : (
            clientesState.map((cliente, i) => (
              <tr
                key={i}
                style={
                  cliente.nombre === client.nombre &&
                  cliente.producto === client.producto
                    ? { backgroundColor: "#ffd694" }
                    : cliente.estado === "Entregado"
                    ? { backgroundColor: "#10c400" }
                    : null

                }
              >
                <td>{i + 1}</td>
                <td className="td-bold-c">
                  <span>{cliente.nombre}</span>
                </td>
                <td className="td-bold">{cliente.producto}</td>
                <td className="fecha-compra">{cliente.fechaCompra}</td>
                <td className="estado-envio">
                  <span
                    style={generateColorState(cliente.estado)}
                    className="span-estado-pendiente"
                  >
                    {cliente.estado}
                  </span>
                </td>
                <td className="valores-precios">${cliente.precio}</td>
                <td className="valores-precios">${cliente.costo}</td>
                <td className="valores-precios">${cliente.envio}</td>
                <td className="valores-precios">${cliente.valorCarbono}</td>

                <tr>
                  <td>
                    <Button
                      onClick={() => {
                        setOpenVer(true);
                        setClient(cliente);
                      }}
                      color="yellow"
                      size="mini"
                      className="btn-editar"
                    >
                      <Icon name="eye" size="small" color="black" />
                    </Button>
                  </td>
                  <td>
                    <Button
                      color="red"
                      size="mini"
                      className="btn-eliminar"
                      onClick={() => {
                        deleteClient(cliente._id);
                      }}
                    >
                      <Icon size="small" name="trash" />
                    </Button>
                  </td>
                  <td>
                    <Button
                      size="mini"
                      color="purple"
                      className="btn-eliminar"
                      onClick={() => {
                        setOpenSeguimiento(true);
                        setClient(cliente);
                      }}
                    >
                      <Icon size="small" name="truck" />
                    </Button>
                  </td>
                </tr>
                <td className="ganancia">
                  <span>${cliente.ganancia}</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* MODALES */}
      <Modales
        changeState={changeState}
        state={state}
        client={client}
        openVer={openVer}
        setOpenVer={setOpenVer}
        openEditar={openEditar}
        setOpenEditar={setOpenEditar}
        openSeguimiento={openSeguimiento}
        setOpenSeguimiento={setOpenSeguimiento}
        openCreate={openCreate}
        setOpenCreate={setOpenCreate}
      />
    </>
  );
}
