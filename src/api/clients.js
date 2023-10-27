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

  async updateClient(id) {}

  async getClient(id) {}

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
    const res = await fetch(this.url + "/admin/clientes/create", {
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

    const data = await res.json();
    return data;
  }
}
