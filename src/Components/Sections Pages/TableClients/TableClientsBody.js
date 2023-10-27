import React, {useState} from 'react'
import { Button, Icon } from 'semantic-ui-react'
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
}) {

  const [openVer, setOpenVer] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [openComentarios, setOpenComentarios] = useState(false);
  const [client, setClient] = useState({});

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
            ) : (
              clientesState.map((cliente, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td className="td-bold-c"><span>{cliente.nombre}</span></td>
                  <td className="td-bold">{cliente.producto}</td>
                  <td className="fecha-compra">{cliente.fechaCompra}</td>
                  <td className="estado-envio">
                    <span className="span-estado-pendiente">
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
                      <Button color="green" size="mini" className="btn-editar">
                        <Icon size="mini" name="check" />
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="orange"
                        size="mini"
                        className="btn-eliminar"
                      >
                        <Icon size="mini" name="close" />
                      </Button>
                    </td>
                    <td>
                      <Button size="mini" color="teal" className="btn-editar">
                        <Icon size="mini" name="comment" />
                      </Button>
                    </td>
                    <td>
                      <Button
                        size="mini"
                        color="purple"
                        className="btn-eliminar"
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

      openComentarios={openComentarios}
      setOpenComentarios={setOpenComentarios}
    />

    </>
  )
}
