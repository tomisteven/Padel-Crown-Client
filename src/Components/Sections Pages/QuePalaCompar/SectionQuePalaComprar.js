import React from "react";
import "./SectionQuePalaComprar.css";
import paleta from "../../../assets/paleta.png";
import LoadBall from "../../LoadBall";


export default function SectionQuePalaComprar() {
  const [state, setState] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 700);
  }, []);
  return (
    <>
    <LoadBall status={state ? "flex" : "none"} />
    <div className="container-que-pala-comprar">
      <h1 className="title-container-quepalacomprar">
        Que pala comprar segun el tipo de jugador que sos ?{" "}
      </h1>
      <div class="section-post1">
        <div class="cont-info-quepalacomprar">
          <h3 className="title-info">Jugador Principiante</h3>
          <h5 className="necesita-quepalacomprar">Necesita...</h5>
          <div class="cont-cualidades">
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Control</span>
            </div>
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Maniobrabilidad</span>
            </div>
          </div>
          <div class="descripcion-paletacomprar">
            <p className="item-description-paletacomprar">
              <span>Control: </span>
              <br />
              Estas paletas están diseñadas para proporcionar un equilibrio
              óptimo entre potencia y precisión. Al ofrecer un punto dulce más
              amplio y mayor estabilidad en los golpes, permiten a los
              principiantes trabajar en su técnica con menos errores no
              forzados. Esto fomenta un aprendizaje más efectivo de los
              fundamentos del juego, ya que la paleta favorece un control más
              preciso durante los golpes y facilita la adaptación al ritmo del
              juego, Una paleta de control brinda confianza al jugador novato al
              minimizar las frustraciones.
            </p>
            <p className="item-description-paletacomprar">
              <span>Maniobrabilidad: </span>
              <br />
              maniobrabilidad en su paleta para mejorar su juego. Una paleta
              maniobrable es más fácil de mover y controlar, lo que ayuda a los
              principiantes a ajustar su posición y golpes con mayor rapidez
            </p>
          </div>
        </div>
        <div class="cont-img-quepalacomprar">
          <img
            className="img-quepalacomprar"
            src="https://www.vita10.es/wp-content/uploads/2022/05/padel_21.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="section2">
        <div class="section-avanzados">
        <h3 className="title-info">Jugador Avanzado</h3>
          <h5 className="necesita-quepalacomprar">Necesita...</h5>
          <div class="cont-cualidades">
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Control</span>
            </div>
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Maniobrabilidad</span>
            </div>
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Potencia</span>
            </div>
          </div>
          <div class="descripcion-paletacomprar">
            <p className="item-description-paletacomprar">
              <span>Control: </span>
              <br />
              Un jugador de pádel avanzado debe elegir una paleta de control
              para perfeccionar su precisión y juego táctico. La paleta de
              control permite ajustar los tiros con mayor precisión, dominar
              efectos y ejecutar estrategias avanzadas, maximizando su
              rendimiento en la pista y manteniendo el control en situaciones
              desafiantes.
            </p>
            <p className="item-description-paletacomprar">
              <span>Maniobrabilidad: </span>
              <br />
              Un jugador de pádel avanzado se beneficia al usar una paleta de
              control con alta maniobrabilidad. Esto agrega precisión a los
              movimientos, facilitando reacciones rápidas y cambios en la
              posición de la paleta. La maniobrabilidad superior permite
              ejecutar tácticas sofisticadas, adaptarse ágilmente y mantener un
              juego versátil y eficaz en cualquier situación.
            </p>
            <p className="item-description-paletacomprar">
              <span>Potencia: </span>
              <br />
              potenciar su juego con una paleta de control adecuada. Estas
              paletas combinan precisión y potencia, permitiendo golpes técnicos
              y fuertes. La capacidad de controlar la potencia en golpes
              precisos brinda ventaja estratégica, ayudando al jugador a dictar
              el ritmo del juego y mantener dominio en la pista contra oponentes
              de alto nivel.
            </p>
          </div>
        </div>
        <div class="section-intermedios">
        <h3 className="title-info">Jugadores Profesionales</h3>
          <h5 className="necesita-quepalacomprar">Necesitan...</h5>
          <div class="cont-cualidades">
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Maniobrabilidad</span>
            </div>
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Potencia</span>
            </div>
            <div class="cont-cualidades-item">
              <img className="img-cualidades" src={paleta} alt="" />
              <span>Calidad</span>
            </div>
          </div>
          <div class="descripcion-paletacomprar">
            <p className="item-description-paletacomprar">
              <span>Especificaciones: </span>
              <br />
              Para jugadores profesionales, la elección de una paleta de pádel con control, potencia y materiales de calidad es esencial. Estas paletas refinadas brindan precisión milimétrica en cada golpe, permitiendo estrategias intrincadas y cambios sutiles en la dirección de la pelota. La potencia controlada se combina con la técnica experta, generando tiros contundentes y certeros. Los materiales de alta calidad aseguran durabilidad y sensación uniforme en cada movimiento, elevando la confianza y el rendimiento en el nivel más alto del juego.
              La selección minuciosa de una paleta de pádel para jugadores profesionales abarca la búsqueda de un equilibrio perfecto entre control y potencia. Esto permite una ejecución impecable de tácticas avanzadas mientras se mantiene la capacidad de generar fuerza cuando es necesario. Además, los materiales de primera calidad garantizan una paleta duradera y consistente, vital para mantener un nivel de juego excepcional y adaptarse a las demandas competitivas en el escenario profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
