import React, { useEffect, useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import "./ModalVerCliente.css";
import { toast } from "react-toastify";
import { Client } from "../../../../../api/clients";
import { RotatingLines } from "react-loader-spinner";

const clientController = new Client();

export default function ModalVerCliente({
  openVer,
  setOpenVer,
  client,
  changeState,
  setOpenComentarios,
  openComentarios,
}) {
  const [edit, setEdit] = useState(false);
  const [estadoPedido, setEstadoPedido] = useState("");
  const [clientState, setClientState] = useState({});
  const [loading, setLoading] = useState(false);
  const [editForm, setEditForm] = useState({
  });

  const [state, setState] = useState(false);

  const updateClient = async (id) => {
     const update = await clientController.updateClient(id, editForm);
    update && toast.success("Cliente editado con exito", { autoClose: 1000 });
    changeState();
    setState(!state);
  };

  const updateClientEstado = async (id) => {
    setLoading(true);
    await clientController.addEstado(client._id, estadoPedido);
    setState(!state);
    setLoading(false);
    changeState();
  };

  useEffect(() => {

      setLoading(true);
    const getClient = async () => {
      const data = await clientController.getClient(client._id);
      setClientState(data);
    };
    setLoading(false);
    getClient();

  }, [client, state]);

  if (typeof clientState.estadoPedido === "undefined") {
    return <div></div>;
  }

  const parseFecha = (fecha) => {
    if (!fecha) return;
    const fechaParseada = fecha.split("T")[0];
    const fechaParseada2 = fechaParseada.split("-").reverse().join("-");
    return fechaParseada2;
  };

  const stateOptions = [
    { key: "pendiente", text: "Pendiente", value: "pendiente" },
    { key: "Confirmado", text: "Confirmado", value: "Confirmado" },
    { key: "En Fabricacion", text: "En Fablicacion", value: "En Fabricacion" },
    { key: "En Secado", text: "En Secado", value: "En Secado" },
    {
      key: "Ultimando Detalles en Fabrica",
      text: "Ultimando Detalles en Fabrica",
      value: "Ultimando Detalles en Fabrica",
    },
    {
      key: "En Local de Padel Crown",
      text: "En Local de Padel Crown",
      value: "En Local de Padel Crown",
    },
    { key: "Empaquetando", text: "Empaquetando", value: "Enpaquetando" },
    { key: "Cancelado", text: "Cancelado", value: "Cancelado" },
    { key: "Enviado", text: "Enviado", value: "Enviado" },
    { key: "Entregado", text: "Entregado", value: "Entregado" },
  ];

  return (
    <div>
      <Modal
        size="fullscreen"
        onClose={() => setOpenVer(false)}
        onOpen={() => setOpenVer(true)}
        open={openVer}
      >
        <Modal.Header className="modal-header-form">
          <h2 className="ver-producto-title">{client.nombre}</h2>
          {edit ? <span className="edit-true">MODO EDITAR</span> : null}
        </Modal.Header>
        <Modal.Content>
          <div className="cont-cliente-ver">
            <div class="cont3-cliente">
              <Modal.Description>
                <div class="secion-input">
                  <p>Cliente</p>
                  <input
                    type="text"
                    className="ver-producto-title"
                    onChange={(e) =>
                      setEditForm({ ...editForm, nombre: e.target.value })
                    }
                    value={edit ? editForm.nombre : clientState.nombre}
                  />
                </div>

                <h2 className="ver-producto-title">
                  Fecha de compra: {client.fechaCompra}
                </h2>
                <h2 className="ver-producto-title">
                  Provincia: {client.provincia}
                </h2>
                <h2 className="ver-producto-title">
                  Localidad: {client.localidad}
                </h2>
                <h2 className="ver-producto-title">
                  Direccion: {client.direccion}
                </h2>

                <p className="ver-cliente-comentarios">
                  Comentarios Extras:{" "}
                  {client.comentarios
                    ? client.comentarios.map((comentario, i) => (
                        <p key={i}>- {comentario.comentario}</p>
                      ))
                    : "No hay comentarios"}
                </p>
                <Button content="Agregar Comentario"
                onClick={() => setOpenComentarios(true)}
                color="teal" />
              </Modal.Description>
            </div>
            <div class="cont1-cliente">
              <Modal.Description>
                <div class="secion-input">
                  <p>Producto</p>
                  <input
                    type="text"
                    className="ver-producto-title"
                    onChange={(e) =>
                      setEditForm({ ...editForm, producto: e.target.value })
                    }
                    value={edit ? editForm.producto : clientState.producto}
                  />
                </div>
                <div class="secion-input">
                  <p>Precio</p>
                  <input
                    type="text"
                    className="ver-producto-title"
                    onChange={(e) =>
                      setEditForm({ ...editForm, precio: e.target.value })
                    }
                    value={edit ? editForm.precio : clientState.precio}
                  />
                </div>
                <div class="secion-input">
                  <p>Costo</p>
                  <input
                    type="text"
                    className="ver-producto-title"
                    onChange={(e) =>
                      setEditForm({ ...editForm, costo: e.target.value })
                    }
                    value={edit ? editForm.costo : clientState.costo}
                  />
                </div>

                <div class="secion-input">
                  <p>Envio</p>
                  <input
                    type="text"
                    className="ver-producto-title"
                    onChange={(e) =>
                      setEditForm({ ...editForm, envio: e.target.value })
                    }
                    value={edit ? editForm.envio : clientState.envio}
                  />
                </div>
                <div class="secion-input">
                  <p>GANANCIA</p>
                  <input
                    type="text"
                    className="ver-producto-title"
                    onChange={(e) =>
                      setEditForm({ ...editForm, ganancia: e.target.value })
                    }
                    value={edit ? editForm.ganancia : clientState.ganancia}
                  />
                </div>
              </Modal.Description>
            </div>
            <div class="cont2-cliente">
              <Modal.Description>
                <h5>
                  Ultimo estado de tu pedido{" "}
                  <span>{
                    clientState.estadoPedido[
                      clientState.estadoPedido.length - 1
                    ].estado
                  }</span>
                </h5>{" "}
                <br />
                <div className="items-de-estados">
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
                    clientState.estadoPedido.map((estado, i) => (
                      <div key={i} className="estado-pedido">
                        <h2 className="ver-producto-title">
                          <p className="estado-estado">
                            {i + 1 } { " - " }Estado: {estado.estado || "No hay estado"}
                          </p>
                          <p>
                            Fecha: {parseFecha(estado.fecha) || "No hay fecha"}
                          </p>
                        </h2>
                      </div>
                    ))
                  )}
                </div>
                <div class="secion-input">
                  <h4>Agregar Estado</h4>
                  <select
                    className="ver-producto-title"
                    onChange={(e) => setEstadoPedido(e.target.value)}
                    value={estadoPedido}
                  >
                    {stateOptions.map((option) => (
                      <option value={option.value}>{option.text}</option>
                    ))}
                  </select>{" "}
                  <Button
                    content="Agregar Estado"
                    color="green"
                    onClick={async () => {
                      updateClientEstado(client._id);
                    }}
                  />
                </div>
              </Modal.Description>
            </div>
          </div>
        </Modal.Content>

        <Modal.Actions>
          {edit ? (
            <>
              <Button
                color="green"
                onClick={() => {
                  updateClient(client._id);
                  setEdit(false);
                }}
              >
                Confirmar Edicion
              </Button>
              <Button color="red" onClick={() => setEdit(false)}>
                Cancelar Edicion
              </Button>
            </>
          ) : (
            <>
              <Button color="blue" onClick={() => setEdit(!edit)}>
                Editar
              </Button>

              <Button color="red" onClick={() => setOpenVer(false)}>
                Cerrar
              </Button>
            </>
          )}
        </Modal.Actions>
      </Modal>
    </div>
  );
}
