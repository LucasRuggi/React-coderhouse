import React from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";

export default function ItemDetail({ productos }) {
  return (
    <>
      {productos.map((unProducto) => (
        <div
          className="row d-flex justify-content-center detail_container py-2"
          key={unProducto.id}
        >
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={unProducto.img}
              className="imgDetail"
              alt={unProducto.titulo}
            ></img>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="d-flex text_container">
              <div className="bar"></div>
              <div className=" text-left">
                <h5 className="product_title">{unProducto.titulo}</h5>
                <p className="product_desc">{unProducto.descripcion}</p>
                <p className="card-text">{unProducto.precio}</p>
                <div className="buy d-flex containerBtn">
                  <Link to="/">
                    <button className="btn buyBtn">Volver</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
