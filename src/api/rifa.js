export class RifaAPI {




    url = "http://localhost:8080/payment/create-payment"

    async createPayment(body) {
        console.log(body);
         const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }


    async getRifasDisponibles(state) {
        const response = await fetch("http://localhost:8080/rifa/get?estado" + state);
        return response.json();
    }




}