import React from "react";
import "./item.css";

function Item({productos}) {
  return (
    <div key={productos.id} className="card mx-2 my-2 d-flex justify-content-center ">
      <img className="img-fluid align-self-center" src={productos.img} alt="img" />
      <div className="d-flex">
        <div className="bar"></div>
        <div className="card-body text-left ml-1">
          <h5 className="card-title">{productos.titulo}</h5>
          <p className="desc">{productos.descripcion}</p>
          <p className="card-text">{productos.precio}</p>
          <div className="buy d-flex containerBtn">
            <button className="btn buyBtn">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
