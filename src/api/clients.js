export class Client {
  url = "https://particular-bernita-digitalcode.koyeb.app";
  local = "http://localhost:8080";

/* "https://padelcrown-server-dev-jepe.3.us-1.fl0.io" */
  async deleteClient(id) {
    const res = await fetch(this.url + "/admin/clientes/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
    const data = await res.json();
    return data;
  }

  async updateClient(id, client) {
    const res = await fetch(this.url + "/admin/clientes/update/" + id, {
      method: "PATCH",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
    const data = await res.json();
    return data;
  }

  async addEstado(id, estado, fecha) {
    //console.log(estado, fecha);
    const res = await fetch(this.url + "/admin/clientes/estado/" + id, {
      method: "POST",
      body: JSON.stringify({ estado: estado, fecha: fecha}),
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
    const data = await res.json();
    return data;
  }

  async getClient(id) {
    const res = await fetch(this.url + "/admin/clientes/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
    const data = await res.json();
    return data;
  }

  async getClients() {
    const res = await fetch(this.url + "/admin/clientes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
    const data = await res.json();
    return data;
  }

  async createClient(client) {

     client.estadoPedido ? client.estadoPedido = [
      {
        estado: client.estadoPedido[0].estado || "Confirmado",
        fecha: new Date().toLocaleDateString(),
      },
    ]
    : client.estadoPedido = [
      {
        estado: "Confirmado",
        fecha: new Date().toLocaleDateString(),
      },
    ]

    client.estado = client.estadoPedido[0].estado;


    await fetch(this.url + "/admin/clientes/create", {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
    return true;
  }

  async addComentario(id, comentario) {
    const res = await fetch(this.url + "/admin/clientes/comentario/" + id, {
      method: "POST",
      body: JSON.stringify({ comentario: comentario }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });

    const data = await res.json();
    return data;
  }

}
