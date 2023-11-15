import React from "react";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import "./TableClients.css";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "./LoginPage/LoginPage.js";
import { Client } from "../../../api/clients";

import HeaderFilters from "./HeaderFilters.js";
import TableClientsBody from "./TableClientsBody.js";
import { Button } from "semantic-ui-react";

const clientController = new Client();
export default function TableClients() {
  const [state, setState] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const [clientesState, setClientesState] = useState(
    useContext(GlobalContext)[1]
  );
  const [loading, setLoading] = useState(true);

  const changeState = () => {
    setState(!state);
  };

  useEffect(() => {
    setLoading(true);
    const getClients = async () => {
      const data = await clientController.getClients();
      setClientesState(data.reverse());
    };
    getClients();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [state]);

  const admin = localStorage.getItem("admin"); //verifica si esta logueado como admin
  if (!admin) return <LoginPage />; //si no esta logueado como admin, no puede ver la pagina

  const filterClients = (search) => {
    const filteredClients = clientesState.filter((cliente) => {
      const dniString = cliente.dni ? cliente.dni.toString() : ''; // Si cliente.dni es undefined, asigna una cadena vacía
      return (
        cliente.nombre.toLowerCase().includes(search.toLowerCase()) ||
        dniString.includes(search.toLowerCase())
      );
    });

    if (search === "") {
      changeState();
      return;
    }
    setClientesState(filteredClients);
  };

  const createClient = async () => {
    const create = await clientController.createClient();
    create && toast.success("Cliente creado con exito", { autoClose: 1000 });
    changeState();
  };
  const deleteClient = async (id) => {
    const del = await clientController.deleteClient(id);
    del &&
      toast.error("Cliente eliminado con exito", {
        theme: "colored",
        autoClose: 1000,
      });
    changeState();
  };

  return (
    <div className="section-clientes">
      <section class="table__header">
        <HeaderFilters
          setState={setState}
          state={state}
          clientesState={clientesState}
          createClient={createClient}
          filterClients={filterClients}
          setClientesState={setClientesState}
          setOpenCreate={setOpenCreate}
          openCreate={openCreate}
        />
      </section>
      <section class="table__body">
        <TableClientsBody
          clientesState={clientesState}
          deleteClient={deleteClient}
          loading={loading}
          changeState={changeState}
          state={state}
          setOpenCreate={setOpenCreate}
          openCreate={openCreate}
        />
      </section>
      <div class="cont-btn-go">
        <Button
          className="btn__go-up"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          color="yellow"
          icon="arrow circle up"
        />
        <Button
          className="btn__go-up"
          onClick={() => window.scrollTo({ top: 100000, behavior: "smooth" })}
          color="blue"
          icon="arrow circle down"
        />
      </div>
      <ToastContainer />
    </div>
  );
}
