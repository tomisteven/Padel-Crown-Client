import React from 'react'
import './SeccionPeso.css'

export default function SeccionPeso({
   setPaso, paso
}) {
  const [range, setRange] = React.useState(340);


  return (
    <div className="cont-seccion-rugoso">
      <h5 className="title-sections">
        Elige el peso de tu paleta ideal entre 340 gramos a 400 gramos !
      </h5>
      <ul className="ul-rugosos">
        <li  className="li-rugoso">
          <p>
            <span className="span-title">340 a 350g</span>,  la paleta tendra mas maniobrilidad pero menos potencia al golpear la pelota.
          </p>
        </li>
        <li className="li-rugoso">
          <p>
            <span className="span-title">350 a 360g  </span> :  la paleta tendra  maniobrilidad y mejora el control y potencia del golpe
          </p>
        </li>
        <li className="li-rugoso">
          <p>
            <span className="span-title">360 a 370g  </span> <span className="span-sub">   Recomendado </span> :  la paleta tendra  menos maniobrilidad y tendra mayor potencia al golpe junto con control
          </p>
        </li>
        <li className="li-rugoso">
          <p>
            <span className="span-title">375 a 400g  </span> :  la paleta tendra  menos maniobrilidad y tendra mayor potencia al golpe pero sera mas dificil de controlar
          </p>
        </li>
      </ul>
      <div class="options-rugosos-p">
        <input type="range" min="340" max="400" value={localStorage.getItem("peso")} className="range-peso" id="myRange" onChange={
          (e) => {
            setRange(e.target.value);
            localStorage.setItem("peso", e.target.value);

          }
        } />
        <div class="option-rugoso">
          <p>
            {localStorage.getItem("peso") || range} gramos
          </p>
          </div>
      </div>
    </div>
  )
}
