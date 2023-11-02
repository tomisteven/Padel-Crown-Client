import React, { useState } from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import "./ModalCrearCliente.css";
import { Client } from "../../../../../api/clients";
import { toast } from "react-toastify";

const clientController = new Client();
export default function ModalCrearCliente({ setOpenCreate, openCreate, changeState }) {
  const [form, setForm] = useState({});


  const stateOptions = [
    { key: "Devolucion", text: "Devolucion", value: "Devolucion" },
    { key: "Pendiente", text: "Pendiente", value: "Pendiente" },
    { key: "Confirmado", text: "Confirmado", value: "Confirmado" },
    { key: "En Fabricacion", text: "En Fabricacion", value: "En Fabricacion" },
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
    { key: "Empaquetando", text: "Empaquetando", value: "Empaquetando" },
    { key: "Cancelado", text: "Cancelado", value: "Cancelado" },
    { key: "Enviado", text: "Enviado", value: "Enviado" },
    { key: "Entregado", text: "Entregado", value: "Entregado" },
  ];

    const createClient = async (form) => {
        const create = await clientController.createClient(form);
        create && toast.success("Cliente creado con exito", { autoClose: 1000, theme: "colored" });
        !create && toast.error("Error al crear cliente", { autoClose: 1000, theme: "colored" });
        setOpenCreate(false);
        setForm({
            nombre: "",
            producto: "",
            fechaCompra: "",
            precio: "",
            costo: "",
            valorCarbono: "",
            envio: "",
            provincia: "",
            localidad: "",
            direccion: "",
            telefono: "",
            email: "",
            estadoPedido: [
                {
                    estado: ""
                }
            ],
            comentarios: [
                {
                    comentario: ""
                }
            ]
        });
        changeState();
    }

  return (
    <Modal
      size="small"
      onClose={() => setOpenCreate(false)}
      onOpen={() => setOpenCreate(true)}
      open={openCreate}
    >
      <Modal.Header>Crear Cliente</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Input
              label="Nombre Completo"
              placeholder="Nombre Completo"
              width={6}
              onChange={(e) => {
                setForm({ ...form, nombre: e.target.value });
              }}
            />
            <Form.Input
              label="Producto"
              onChange={(e) => {
                setForm({ ...form, producto: e.target.value });
              }}
              placeholder="Producto"
              width={6}
            />
            <Form.Input
              label="Fecha Compra"
              placeholder="Fecha Compra"
              onChange={(e) => {
                setForm({ ...form, fechaCompra: e.target.value });
              }}
              width={6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label={"Precio"}
              onChange={(e) => {
                setForm({ ...form, precio: e.target.value });
              }}
              placeholder="Precio"
              width={4}
            />
            <Form.Input
              label={"Costo"}
              placeholder="Costo"
              onChange={(e) => {
                setForm({ ...form, costo: e.target.value });
              }}
              width={4}
            />
            <Form.Input
              label={"Carbono"}
              onChange={(e) => {
                setForm({ ...form, valorCarbono: e.target.value });
              }}
              placeholder="Carbono"
              width={4}
            />
            <Form.Input
              label={"Envio"}
              placeholder="Envio"
              onChange={(e) => {
                setForm({ ...form, envio: e.target.value });
              }}
              width={4}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label={"Provincia"}
              onChange={(e) => {
                setForm({ ...form, provincia: e.target.value });
              }}
              placeholder="Provincia"
              width={6}
            />
            <Form.Input
              label={"Localidad"}
              onChange={(e) => {
                setForm({ ...form, localidad: e.target.value });
              }}
              placeholder="Localidad"
              width={6}
            />
            <Form.Input
              label={"Direccion"}
              onChange={(e) => {
                setForm({ ...form, direccion: e.target.value });
              }}
              placeholder="Direccion"
              width={6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              onChange={(e) => {
                setForm({ ...form, telefono: e.target.value });
              }}
              label={"Telefono"}
              placeholder="Telefono"
              width={6}
            />
            <Form.Input
              label={"Email"}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              placeholder="Email"
              width={6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              fluid
              label="Estado"
              options={stateOptions}
              width={8}
              placeholder="Estado"
              onChange={(e, data) => {
                setForm({ ...form, estadoPedido: [
                    {
                        estado: data.value
                    }
                ]  });
              }}
            />
            <Form.Input
              label={"Comentario"}
              placeholder="Comentario"
              width={8}
              onChange={(e) => {
                setForm({ ...form, comentarios: [{
                    comentario: e.target.value
                }] });
              }}
            />
          </Form.Group>
        </Form>

        <Button
          color="black"
          onClick={() => {
            setOpenCreate(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          content="Crear"
          labelPosition="left"
          icon="checkmark"
          onClick={() => {
            createClient(form);
          }}
          positive
        />
      </Modal.Content>
    </Modal>
  );
}
