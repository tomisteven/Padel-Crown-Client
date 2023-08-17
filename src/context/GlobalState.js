import { createContext} from "react";

const productos = await fetch("https://padelcrown.up.railway.app/");
const data = await productos.json();

export const GlobalContext = createContext(data);
