import React from "react";
import "./SectionImgs.css";
import img1 from "../../../assets/revendedor.webp";
import img2 from "../../../assets/mayorista.webp";
import img3 from "../../../assets/canchas.webp";

export default function SectionImgs() {
  return (
    <div class="cont-section-img">
      <h4 id="mayoristas" className="title-imagenes">
        Mayoristas, Reveendedores y Armado profesional de canchas{" "}
      </h4>
      <div className="cont-img-sections">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}
