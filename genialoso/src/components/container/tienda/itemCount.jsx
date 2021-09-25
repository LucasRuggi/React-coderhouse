import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemCount.css";

export default function ItemCount({ initial, onAdd, producto }) {
  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < producto.cantidad) {
      setCount(count + 1);
    } else {
      alert("No hay mas existencias en stock");
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const agregarCarrito = () => {
    onAdd(count);
  };

  let precioAB = count * producto.precio;

  return (
    <div>
      <div className="buy d-flex containerBtnCount">
        <h5 className="precioCount">Total: ${precioAB}</h5>
      </div>

      <div className="buy d-flex containerBtnCount">
        <button className="btn buyBtnCount " onClick={restar}>
          -
        </button>

        <div className="d-flex">
          <h4 className="txtCountBtn"> {count}</h4>
        </div>

        <button className="btn buyBtnCount" onClick={sumar}>
          +
        </button>
      </div>
      <div className="buy d-flex containerBtnCount">
        <Link to="/">
          <button className="btn buyBtnOther btnCount">Volver</button>
        </Link>

        <button className="btn buyBtnOther btnCount" onClick={agregarCarrito}>
          Agregar
        </button>
      </div>
    </div>
  );
}
