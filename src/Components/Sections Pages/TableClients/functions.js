export class Functions {

    calcularGanancia = (precio, costo, envio) => {
        const ganancia = envio ? precio - costo - envio : precio - costo;
        return ganancia;
      };


      filterClients = (search, clientesState, setClientesState, clientes) => {
        const filteredClients = clientesState.filter((cliente) => {
          return cliente.nombre.toLowerCase().includes(search.toLowerCase());
        });

        if (search === "") {
          setClientesState(clientes);
          return;
        }
        setClientesState(filteredClients);
      };

      colorState = (estado) => {
    if (estado === "Pendiente") {
      return "span-estado-pendiente";
    } else if (estado === "Confirmado") {
      return "span-estado-confirmado";
    } else if (estado === "Fabricacion") {
      return "span-estado-fabricacion";
    } else if (estado === "Secado") {
      return "span-estado-secado";
    } else if (estado === "Envio a PadelCrown") {
      return "span-estado-enviopadelcrown";
    } else if (estado === "Empaquetado") {
      return "span-estado-empaquetado";
    } else if (estado === "Despachado") {
      return "span-estado-despachado";
    } else if (estado === "En Camino") {
      return "span-estado-camino";
    } else if (estado === "Entregado") {
      return "span-estado-entregado";
    }
  };



}