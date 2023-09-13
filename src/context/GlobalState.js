import { createContext} from "react";

const productos = await fetch("https://padelcrown-server-4u2s-dev.fl0.io/");
const revendedores = await fetch("https://padelcrown-server-4u2s-dev.fl0.io/revendedores");
const revendedoresData = await revendedores.json();
const data = await productos.json();

export const GlobalContext = createContext([data, revendedoresData]);
