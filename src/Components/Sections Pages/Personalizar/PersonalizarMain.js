import React from "react";
import "./PersonalizarMain.css";
import SeccionForma from "./Partes/Forma/SeccionForma";
import SeccionMaterial from "./Partes/Material/SeccionMaterial";
import SeccionNucleo from "./Partes/Nucleo/SeccionNucleo";
import SeccionPeso from "./Partes/Peso/SeccionPeso";
import SeccionRugoso from "./Partes/Rugoso/SeccionRugoso";
import SeccionShockOut from "./Partes/ShockOut/SeccionShockOut";
/* import SectionAccesorios from "./Partes/Accesorios/SectionAccesorios"; */
import LoaderPersonalizada from "./LoaderPersonalizada";
import DetallesSeleccionados from "./DetallesSeleccionados";
import ModalMensaje from "./ModalMensaje";

export default function PersonalizarMain() {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [showMessage, setShowMessage] = React.useState(true);
  const [formContact, setForm] = React.useState({});

  console.log(formContact);

  React.useEffect(() => {
    localStorage.setItem("forma", "");
    localStorage.setItem("material", "");
    localStorage.setItem("nucleo", "");
    localStorage.setItem("peso", "");
    localStorage.setItem("rugoso", "");
    localStorage.setItem("shockOut", "");
    localStorage.setItem("precioMaterial", "");
    localStorage.setItem("precioRugoso", "");
    localStorage.setItem("precioShockOut", "");

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const [paso, setPaso] = React.useState(1);

  const form = {
    forma: localStorage.getItem("forma"),
    material: localStorage.getItem("material"),
    nucleo: localStorage.getItem("nucleo"),
    peso: localStorage.getItem("peso"),
    rugoso: localStorage.getItem("rugoso"),
    shockOut: localStorage.getItem("shockOut"),
    precioMaterial: localStorage.getItem("precioMaterial"),
    precioRugoso: localStorage.getItem("precioRugoso"),
    precioShockOut: localStorage.getItem("precioShockOut"),
    total: parseInt(localStorage.getItem("precioMaterial")) +
      parseInt(localStorage.getItem("precioRugoso")) + parseInt(localStorage.getItem("precioShockOut"))
  };

  const sendMessageToWhatsapp = () => {
    const url =
      `https://wa.me/1164764108?text=Hola%20mi%20nombre%20es%20*${formContact.nombre}*%0APersonalicé%20mi%20paleta%20en%20la%20web%20y%20quiero%20encargarla!%20Las%20características%20son:%0A%0A*Forma*:%20${form.forma},%20%0A*Materiales*:%20${form.material},%20%0A*Núcleo*:%20${form.nucleo},%20%0A*Peso*:%20${form.peso}%20gramos,%20%0A*Rugoso*:%20${form.rugoso},%20%0A*ShockOuts*:%20${form.shockOut},%20%0A*Total*:%20$${form.total}`;

    window.open(url, "_blank");

  };

  const renderizarPasos = () => {
    switch (paso) {
      case 1:
        return (
          <SeccionForma
            formas={form.forma}
            setLoading={setLoading}
            setItems={setItems}
            items={items}
          />
        );
      case 2:
        return (
          <SeccionMaterial
            materiales={form.material}
            setLoading={setLoading}
            setItems={setItems}
            items={items}
          />
        );
      case 3:
        return <SeccionNucleo setLoading={setLoading} nucleos={form.nucleo} />;
      case 4:
        return <SeccionRugoso setLoading={setLoading} rugosos={form.rugoso} />;
      case 5:
        return <SeccionPeso />;
      case 6:
        return (
          <SeccionShockOut setLoading={setLoading} shockOuts={form.shockOut} />
        );
        /* case 7:
          return <SectionAccesorios setLoading={setLoading} accesorios={form.accesorios} /> */

      default:
        return <SeccionForma setLoading={setLoading} rugosos={form.rugoso} />;
    }
  };

  return (
    <div className="personalizar-container">
      {loading ? (
        <LoaderPersonalizada />
      ) : (
        <>
          <h3 className="personalizar-container-title">
            Personalizar tu paleta de padel, Paso: {paso}/6
          </h3>
          <div className="cont-multipasos-precios">
            {renderizarPasos()}
             <DetallesSeleccionados form={form} clientInfo={formContact} />
          </div>
          <div className="cont-btns-personalizar">
            {paso !== 1 ? (
              <button
                onClick={() => setPaso(paso - 1)}
                className="button-siguiente"
              >
                {" "}
                Atras
                <span></span>
              </button>
            ) : null}
            {paso !== 6 ? (
              <button
                onClick={() => setPaso(paso + 1)}
                className="button-siguiente"
              >
                {" "}
                Siguiente
                <span></span>
              </button>
            ) : null}
            {paso === 6 ? (
              <button
                className="personalizar-button-enviar"
                onClick={() => sendMessageToWhatsapp()}
              >
                Enviar
              </button>
            ) : null}
          </div>
        </>
      )}
      <ModalMensaje open={showMessage} setOpen={setShowMessage} formContact={formContact} setForm={setForm} />
    </div>

  );
}

