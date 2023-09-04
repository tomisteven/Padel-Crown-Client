import React from "react";
import "./SectionImgs.css";
import img1 from "../../../assets/REVENDE PADEL CROWN.png";
import img2 from "../../../assets/FLYER MAYORISTAS.png";
import img3 from "../../../assets/FLYER ARMADO DE CANCHAS.png";

export default function SectionImgs() {
  return (
    <>
    <h4 id="mayoristas" className="title-imagenes">Mayoristas, Reveendedores y Armado profesional de canchas</h4>
    <div  className="cont-img-sections">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
    </>
  );
}
