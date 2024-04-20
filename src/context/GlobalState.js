import { createContext} from "react";

const production = true;


const productos = await fetch("https://particular-bernita-digitalcode.koyeb.app/");
const clientes = await fetch(production ? "https://particular-bernita-digitalcode.koyeb.app/admin/clientes" : "http://localhost:8080/admin/clientes" , {
    headers: {
        'Authorization': "token_padelcrown",
        'Content-Type': 'application/json',
    }
})
const data = await productos.json();
const clientesData = await clientes.json();

console.log(clientesData);



export const GlobalContext = createContext([data, clientesData]);