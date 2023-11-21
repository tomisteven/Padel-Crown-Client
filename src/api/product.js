export class Product {

    url = "https://padelcrown-server-dev-jepe.3.us-1.fl0.io/"

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