import { createContext} from "react";

const production = true;


const productos = await fetch("https://padelcrown-server-dev-jepe.3.us-1.fl0.io");
const clientes = await fetch(production ? "https://padelcrown-server-dev-jepe.3.us-1.fl0.io/admin/clientes" : "http://localhost:8080/admin/clientes" , {
    headers: {
        'Authorization': "token_padelcrown",
        'Content-Type': 'application/json',
    }
})



//const revendedores = await fetch("https://padelcrown-server-4u2s-dev.fl0.io/revendedores");
//const revendedoresData = await revendedores.json();
const data = await productos.json();
const clientesData = await clientes.json();

console.log(clientesData);



export const GlobalContext = createContext([data, clientesData]);
