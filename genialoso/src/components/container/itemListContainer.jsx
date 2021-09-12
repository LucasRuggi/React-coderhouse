import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { getFetch } from "../productos/productos";
import ItemList from "../container/tienda/itemList";
import { useParams } from "react-router-dom";

function ListarItemsCargados() {
  const [productosState, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selector } = useParams();

  useEffect(() => {
    if (selector) {
      getFetch.then((res) => {
        setProductos(
          res.filter((categorias) => categorias.categoria === selector)
        );
        setLoading(false);
      });
    } else {
      getFetch.then((res) => {
        setProductos(res);
        setLoading(false);
      });
    }
  }, [selector]);

  return (
    <div className="d-flex justify-content-center mr-2 mt-5">
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productosState} />
      )}
    </div>
  );
}

export default ListarItemsCargados;
