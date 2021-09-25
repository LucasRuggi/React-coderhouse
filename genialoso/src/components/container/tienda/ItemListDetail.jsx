import React from "react";
import ItemDetail from "./itemDetail";

export default function ItemListDetail({ productos }) {
  return (
    <>
      {productos.map((unidad) => (
        <ItemDetail unProducto={unidad} />
      ))}
    </>
  );
}
