export class Client {
  url = "https://padelcrown-server-dev-rhda.1.us-1.fl0.io";

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

  async addEstado(id, estado) {
    const res = await fetch(this.url + "/admin/clientes/estado/" + id, {
      method: "POST",
      body: JSON.stringify({ estado: estado }),
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
    await fetch(this.url + "/admin/clientes/create", {
      method: "POST",
      body: JSON.stringify({
        estado: "Pendiente",
        nombre: "Prueba 1",
        producto: "1 atos Eva + protector colocado  ",
        fechaCompra: "27-Sep",
        precio: 47501,
        costo: 35550,
        envio: 3500,
        valorCarbono: 8451,
        __v: 0,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "token_padelcrown",
      },
    });
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
