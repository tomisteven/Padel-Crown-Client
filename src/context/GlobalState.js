import { createContext} from "react";

const productos = await fetch("https://padelcrown-server-dev-rhda.1.us-1.fl0.io");
const clientes = await fetch("https://padelcrown-server-dev-rhda.1.us-1.fl0.io/admin/clientes", {
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
