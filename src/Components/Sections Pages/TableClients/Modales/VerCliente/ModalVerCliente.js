import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import "./ModalVerCliente.css";

export default function ModalVerCliente({ openVer, setOpenVer, client }) {
  const [edit, setEdit] = useState(false);
  const [editForm, setEditForm] = useState({
    nombre: "" || client.nombre,
    producto: "" || client.producto,
    precio: "" || client.precio,
    costo: "" || client.costo,
    envio: "" || client.envio,
    fechaCompra: "" || client.fechaCompra,
    estado: "" || client.estado,
    comentarios: "" || client.comentarios,
  });



/* DEJAMOS EN HACER LAS OPCIONES PARA LOS ESTADOS, REVISAR EL BACKEND */


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
    { key: "Enviado a Local de Padel Crown", text: "Enviado a Local de Padel Crown", value: "Enviado a Local de Padel Crown"},
    { key: "Empaquetando", text: "Empaquetando", value: "Enpaquetando" },
    { key: "Cancelado", text: "Cancelado", value: "Cancelado" },
    { key: "Enviado", text: "Enviado", value: "Enviado" },
    { key: "Entregado", text: "Entregado", value: "Entregado" },
  ];

  return (
    <div>
      <Modal
        size="large"
        onClose={() => setOpenVer(false)}
        onOpen={() => setOpenVer(true)}
        open={openVer}
      >
        <Modal.Header>
          Cliente: {client.nombre}{" "}
          {edit ? <span className="edit-true">MODO EDITAR</span> : null}
        </Modal.Header>
        <Modal.Content>
          <div className="cont-cliente-ver">
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
                    value={edit ? editForm.producto : client.producto}
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
                    value={edit ? editForm.precio : client.precio}
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
                    value={edit ? editForm.costo : client.costo}
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
                    value={edit ? editForm.envio : client.envio}
                  />
                </div>

                <p className="ver-cliente-comentarios">
                  Comentarios Extras:{" "}
                  {client.comentarios
                    ? client.comentarios
                    : "No hay comentarios"}
                </p>
                <Button content="Agregar Comentario" color="teal" />
              </Modal.Description>
            </div>
            <div class="cont2-cliente">
              <Modal.Description>
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
                <h2 className="ver-producto-estado">
                  Estado del envio: {client.estado}
                </h2>
              </Modal.Description>
            </div>
          </div>
        </Modal.Content>

        <Modal.Actions>
          {edit ? (
            <>
              <Button color="green" onClick={() => setEdit(false)}>
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
              <Button color="orange" onClick={() => setOpenVer(false)}>
                Eliminar
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
