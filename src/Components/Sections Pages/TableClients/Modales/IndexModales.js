import React from "react";
import ModalVerCliente from "./VerCliente/ModalVerCliente";

export default function Modales({ setOpenVer, openVer, client }) {
  return (
    <div>
      <ModalVerCliente setOpenVer={setOpenVer} openVer={openVer} client={client} />
    </div>
  );
}
