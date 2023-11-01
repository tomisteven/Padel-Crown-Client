import React from "react";
import ModalVerCliente from "./VerCliente/ModalVerCliente";
/* import ModalComentarios from "./Comentarios/ModalComentarios.js"; */
import ModalSeguimiento from "./Seguimiento/ModalSeguimiento.js";

export default function Modales({
  setOpenVer,
  openVer,
  client,
  changeState,
  setOpenComentarios,
  openComentarios,
  setOpenSeguimiento,
  openSeguimiento,
}) {
  return (
    <div>
      <ModalVerCliente
        changeState={changeState}
        setOpenVer={setOpenVer}
        openVer={openVer}
        client={client}
        setOpenComentarios={setOpenComentarios}
        openComentarios={openComentarios}
      />
{/*       <ModalComentarios
        setOpenComentarios={setOpenComentarios}
        openComentarios={openComentarios}
        client={client}
      /> */}

      <ModalSeguimiento
        setOpenSeguimiento={setOpenSeguimiento}
        openSeguimiento={openSeguimiento}
        client={client}
        onChange={changeState}
      />
    </div>
  );
}
