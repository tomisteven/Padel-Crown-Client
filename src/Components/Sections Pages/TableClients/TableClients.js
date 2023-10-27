import React from "react";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import "./TableClients.css";
import { ToastContainer, toast } from "react-toastify";
import LoginPage from "../../LoginPage/LoginPage.js";
import { Client } from "../../../api/clients";

import HeaderFilters from "./HeaderFilters.js";
import TableClientsBody from "./TableClientsBody.js";

const clientController = new Client();
export default function TableClients() {
  const [state, setState] = useState(false);

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
    }, 300);
  }, [state]);

  const admin = localStorage.getItem("admin"); //verifica si esta logueado como admin
  if (!admin) return <LoginPage />; //si no esta logueado como admin, no puede ver la pagina

  const filterClients = (search) => {
    const filteredClients = clientesState.filter((cliente) => {
      return cliente.nombre.toLowerCase().includes(search.toLowerCase());
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
          clientesState={clientesState}
          createClient={createClient}
          filterClients={filterClients}
        />
      </section>
      <section class="table__body">
        <TableClientsBody
          clientesState={clientesState}
          deleteClient={deleteClient}
          loading={loading}
          changeState={changeState}
          state={state}
        />
      </section>
      <ToastContainer />
    </div>
  );
}
