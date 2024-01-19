export class Product {

     url = "https://particular-bernita-digitalcode.koyeb.app/" 

    async getProducts() {
        const res = await fetch(`${this.url}`);
        const data = await res.json();
        return data;
    }


    async createProduct(product) {}


    async editProduct(product, id) {

         const res = await fetch(`${this.url}update/${id}`, {
            method: "PATCH",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    }

}