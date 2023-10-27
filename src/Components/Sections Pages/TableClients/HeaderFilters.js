import React from "react";
import { Button } from "semantic-ui-react";

export default function HeaderFilters({
  clientesState,
    createClient,
    filterClients,

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
        <Button color="blue" size="small" className="btn-editar">
          Despachados
        </Button>
        <Button color="red" size="small" className="btn-eliminar">
          Antiguos
        </Button>
        <Button color="green" size="small" className="btn-editar">
          Pendientes
        </Button>
        <Button color="teal" size="small" className="btn-eliminar">
          En Fabricacion
        </Button>
        <Button color="orange" size="small" className="btn-eliminar">
          Empaquetando
        </Button>
        <Button color="yellow" size="small" className="btn-eliminar">
          En Camino
        </Button>
      </div>
    </>
  );
}
