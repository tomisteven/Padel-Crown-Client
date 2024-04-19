export class Seguimiento{

    url = "https://particular-bernita-digitalcode.koyeb.app"
    local = "http://localhost:8080"

    async findClients(dni){
        const data = await fetch(this.local + "/seguimiento/" + dni, {
            method: "GET"
        })
        const res = await data.json()
        return res
    }

}