import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { RotatingLines } from "react-loader-spinner";
import { Functions } from "./functions";
import Modales from "./Modales/IndexModales.js";

const functions = new Functions();
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
  /*   const [openComentarios, setOpenComentarios] = useState(false); */
  const [openSeguimiento, setOpenSeguimiento] = useState(false);
  const [client, setClient] = useState({});

  const generateColorState = (estado) => {
    switch (estado) {
      case "Pendiente":
        return { backgroundColor: "#d893a3" };
      case "Confirmado":
        return { backgroundColor: "#219653" };
      case "En Fabricacion":
        return { backgroundColor: "#EB5757" };
      case "En Secado":
        return { backgroundColor: "#2F80ED" };
      case "Ultimando Detalles en Fabrica":
        return { backgroundColor: "#2F80ED" };
      case "Enviado a Local de Padel Crown":
        return { backgroundColor: "#2F80ED" };
      case "Empaquetando":
        return { backgroundColor: "#2F80ED" };
      case "Cancelado":
        return { backgroundColor: "red" };
      case "Enviado":
        return { backgroundColor: "#2F80ED" };
      case "Entregado":
        return { backgroundColor: "#219653" };
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
            <th> Producto</th>
            <th> Fecha</th>
            <th> Estado</th>
            <th> Precio</th>
            <th> Costo</th>
            <th> Envio</th>
            <th> Acciones</th>
            <th>GANANCIA</th>
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
              colSpan={10} >
                No hay clientes
              </td>
            </tr>
          ) : (
            clientesState.map((cliente, i) => (
              <tr key={i}>
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
                <td>${cliente.precio}</td>
                <td>${cliente.costo}</td>
                <td>${cliente.envio}</td>
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
                      <Icon name="eye" size="mini" color="black" />
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
                      <Icon size="mini" name="trash" />
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
                      <Icon size="mini" name="truck" />
                    </Button>
                  </td>
                </tr>
                <td className="ganancia">
                  <span>
                    $
                    {functions.calcularGanancia(
                      cliente.precio,
                      cliente.costo,
                      cliente.envio
                    )}
                  </span>
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
