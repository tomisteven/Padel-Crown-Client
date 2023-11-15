import React from "react";
import "./BtnSeguimiento.css";
import { Icon } from "semantic-ui-react";

export default function BtnSeguimiento() {
  return (
    <button
      onClick={() => {
        window.location.href = "/seguimiento";
      }}
      class="btn-seguimiento"
    >
      Seguimiento de pedido {" "} <Icon name="truck" />
    </button>
  );
}
