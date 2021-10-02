import React from "react";
import { CartContextUse } from "../../context/CartContext";

export default function CarritoDetail() {
  const { clearCart, removeItem, cart } = CartContextUse();

  const totalCarrito = cart.map(
    (unidad) => unidad.quantity * unidad.item.precio
  );

  let sumaTotal = 0;
  for (let i = 0; i < totalCarrito.length; i++) {
    sumaTotal += totalCarrito[i];
  }

  return (
    <div className="text-center">
      <button className="btn buyBtnOtherRemove btnCount" onClick={clearCart}>
        Vaciar carrito
      </button>
      <h3>Total del carrito: ${sumaTotal}</h3>
      <div className="container-fluid contenedorCarrito">
        <div className="row">
          {cart.map((element) => {
            return (
              <>
                <div className="detail_container-cart d-flex col-6 row">
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center ">
                    <img
                      src={element.item.img}
                      className="imgDetail"
                      alt={element.item.titulo}
                    ></img>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex text_container">
                      <div className=" text-center">
                        <h2 className="product_title  justify-content-center ">
                          {element.item.titulo}
                        </h2>

                        <h3 className=" justify-content-center ">
                          Cantidad: {element.quantity}
                        </h3>
                        <div className="buy d-flex containerBtn">
                          <button
                            className="btn buyBtnOtherRemove btnCount  justify-content-center "
                            onClick={() => removeItem(element.item.id)}
                          >
                            Sacar item
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
