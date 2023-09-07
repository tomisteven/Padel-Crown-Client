import React, { useEffect, useState, useContext } from "react";
import { Dna } from "react-loader-spinner";
import "./SectionTwo.css";
import "./responsiveSectionTwo.css";
import SectionProducts from "../../SectionProducts";
import SectionFilters from "../../SectionFilters";
import ExpandMenu from "../../ExpandMenu";
import BtnMenuExpandible from "../../BtnMenuExpandible";
import ModalComponent from "../../ModalComponent";
import { GlobalContext } from "../../../context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionOne from "../SectionOne/SectionOne";
import SectionEnvios from "./SectionEnvios";
import SectionImgs from "./SectionImgs.js";
import BtnWhatssapp from "../../BtnWhatssapp.js";

export default function SectionTwo() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [productsSelected, setProductsSelected] = useState([]);
  const [stateCart, setStateCart] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [productImage, setProductImage] = useState({});

  const categorias = [
    "Fibra de Carbono",
    "Fibra de Vidrio",
    "Foam",
    "Eva",
    "Evasoft",
    "Sin Ploteo",
    "Control",
    "Potencia",
    "Accesorios",
  ];

  const $productos = useContext(GlobalContext);

  const [products, setProducts] = useState(useContext(GlobalContext));
  const productsCategory = useContext(GlobalContext);
  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [products]);

  if (loading) {
    return (
      <Dna
        visible={true}
        height="60"
        width="60"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }

  return (
    <>
      <SectionOne />
      <section id="productos" className="section-two">
        <SectionFilters
          categorias={categorias}
          productsCategory={productsCategory}
          $productos={$productos}
          setProducts={setProducts}
          value={value}
          setValue={setValue}
          setLoading={setLoading}
        />
        <SectionProducts
          products={products}
          setProductsSelected={setProductsSelected}
          productsSelected={productsSelected}
          setProductImage={setProductImage}
          setOpen={setOpen}
        />

        <ExpandMenu
        setStateCart={setStateCart}
          setProductsSelected={setProductsSelected}
          productsSelected={productsSelected}
        />
      </section>

      <SectionImgs />

      <SectionEnvios />

      <BtnWhatssapp />
      <BtnMenuExpandible
        productsSelected={productsSelected}
        stateCart={stateCart}
        setStateCart={setStateCart}
      />

      <ModalComponent
        open={open}
        setOpen={setOpen}
        productImage={productImage}
      />
      <ToastContainer />
    </>
  );
}
