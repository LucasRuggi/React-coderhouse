import React from "react";
import { CartContextUse } from "../../context/CartContext";
import "./formOrder.css";
import OrderDetail from "./ordenDetails";

export default function FormOrder() {
  const { clearCart } = CartContextUse();
  return (
    <div>
      <div className="container-fluid containerOrder">
        <div className="mt-3 ">
          <OrderDetail />
        </div>
      </div>
      <div className="container-fluid containerForm">
        <form>
          <div className="form-group mt-3">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="telefono"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="direccion"
              required
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Enviar Orden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
