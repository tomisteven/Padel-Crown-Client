import { createContext } from "react";

const production = true;

if (window.location.href.includes("/admin/clientes")) {
  console.log("entro en admin clientes, globalState");
  try {
    const clientes = await fetch(
      production
        ? "https://particular-bernita-digitalcode.koyeb.app/api/admin/clientes"
        : "http://localhost:8080/admin/clientes",
      {
        headers: {
          Authorization: "token_padelcrown",
          "Content-Type": "application/json",
        },
      }
    );

    var clientesData = await clientes.json();
  } catch (error) {
    console.log(error);
    clientesData = [];
  }
}

if (window.location.href.includes("/admin/productos") || window.location.href === "https://padelcrown.store/" || window.location.href === "http://localhost:3000/") {
  console.log("entro en admin productos, globalState");
  try {
    const productos = await fetch(
      production
        ? "https://particular-bernita-digitalcode.koyeb.app"
        : "http://localhost:8080",
      {
        headers: {
          Authorization: "token_padelcrown",
          "Content-Type": "application/json",
        },
      }
    );

    var data = await productos.json();
  } catch (error) {
    console.log(error);
    data = [];
  }
}

/* console.log(clientesData); */

export const GlobalContext = createContext([data, clientesData]);
