export class Seguimiento{

    url = "https://padelcrown-server-dev-jepe.3.us-1.fl0.io"

    async findClients(dni){
        const data = await fetch(this.url + "/seguimiento/" + dni, {
            method: "GET"
        })
        const res = await data.json()
        return res
    }

}