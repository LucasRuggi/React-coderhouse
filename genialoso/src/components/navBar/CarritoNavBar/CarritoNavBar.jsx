import React from "react";
import "./carritoNavBar.css";
import { Link } from "react-router-dom";

function CarritoNavBar() {
  return (
    <Link to="/cart">
      <button className="BtnCarrito">
        <img
          className="btnImg"
          src="/img/imgCarrito/imgCarrito.png"
          alt="carrito"
        />
      </button>
    </Link>
  );
}
export default CarritoNavBar;
