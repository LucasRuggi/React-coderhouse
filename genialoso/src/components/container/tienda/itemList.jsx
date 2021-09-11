import React from "react";
import Items from "./item";

export default function ItemList({ productos }) {
  return (
    <>
      {productos.map((unidad) => (
        <Items productos={unidad} />
      ))}
    </>
  );
}

