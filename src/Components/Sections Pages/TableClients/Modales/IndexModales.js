import React from "react";
import ModalVerCliente from "./VerCliente/ModalVerCliente";
import ModalCrearCliente from "./CrearCliente/ModalCrearCliente.js";
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
  setOpenCreate,
  openCreate,
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

      <ModalCrearCliente setOpenCreate={setOpenCreate} openCreate={openCreate}  changeState={changeState} />
    </div>
  );
}
