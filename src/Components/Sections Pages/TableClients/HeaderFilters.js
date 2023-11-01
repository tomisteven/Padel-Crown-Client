import React from "react";
import { Button } from "semantic-ui-react";

export default function HeaderFilters({
  clientesState,
    createClient,
    filterClients,
    setClientesState,
    setState,
    state

}) {
  return (
    <>
      <Button
        onClick={() => {
          createClient();
        }}
        content="Crear Cliente"
        color="green"
        size="small"
        className="btn-editar"
      ></Button>

      <p>Cantidad Clientes {clientesState.length}</p>
      <div class="input-group">
        <input
          type="search"
          onChange={(e) => {
            filterClients(e.target.value);
          }}
          placeholder="Buscar..."
        />
      </div>
      <div class="header-filters">
      <Button color="black" size="small" onClick={
          () => {
            setState(!state)
          }
        } className="btn-editar">
          Volver
        </Button>
        <Button color="blue" size="small" onClick={
          () => {
            setClientesState(clientesState.filter(cliente => cliente.estado === "Despachados"))
          }
        } className="btn-editar">
          Despachados
        </Button>

        <Button onClick={
          () => {
            setClientesState(clientesState.filter(cliente => cliente.estado === "En Fabricacion"))
          }
        }
          color="teal" size="small" className="btn-eliminar">
          En Fabricacion
        </Button>
        <Button onClick={
          () => {
            setClientesState(clientesState.filter(cliente => cliente.estado === "Entregado"))
          }
        } color="orange" size="small" className="btn-eliminar">
          Entregado
        </Button>

      </div>
    </>
  );
}
