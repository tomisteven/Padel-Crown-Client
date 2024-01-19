export class Seguimiento{

    url = "https://particular-bernita-digitalcode.koyeb.app/"

    async findClients(dni){
        const data = await fetch(this.url + "/seguimiento/" + dni, {
            method: "GET"
        })
        const res = await data.json()
        return res
    }

}