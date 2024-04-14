export class RifaAPI {
  production = true;
  url = this.production
    ? "https://particular-bernita-digitalcode.koyeb.app"
    : "http://localhost:8080";


  async createPayment(body) {
    console.log(body);
    const response = await fetch(this.url + "/payment/create-payment", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async getRifasDisponibles(state) {
    const response = await fetch(
      this.url + "/rifa/get?estado" + state
    );
    return response.json();
  }
}
