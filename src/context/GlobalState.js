import { createContext} from "react";

const production = true;


//Clientes
if(window.location.href.includes("/admin/clientes")){
  const clientes = await fetch(production ? "https://particular-bernita-digitalcode.koyeb.app/admin/clientes" : "http://localhost:8080/admin/clientes" , {
    headers: {
        'Authorization': "token_padelcrown",
        'Content-Type': 'application/json',
    }
})
  var clientesData = await clientes.json();
}


//Productos
if(window.location.href.includes("/admin/productos") || window.location.href === "http://localhost:3000/" || window.location.href === "https://padelcrown.store"){
  const productos = await fetch(production ? "https://particular-bernita-digitalcode.koyeb.app" : "http://localhost:8080" , {
    headers: {
        'Authorization': "token_padelcrown",
        'Content-Type': 'application/json',
    }
})
  var data = await productos.json();
}




export const GlobalContext = createContext([data, clientesData]);