import { useState, useEffect } from 'react'
import "./itemListContainer.css";
import { getFetch } from "../productos/productos";
import ItemList from "../container/tienda/itemList";

function ListarItemsCargados() {

    const [productosState, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getFetch.then((res) => {
        setProductos(res);
        setLoading(false);
      });
    }, []);
  
    return (
      <div className="d-flex justify-content-center mr-2 mt-5">
        {loading ? (
          <p>Cargando productos</p>
        ) : (
          <ItemList productos={productosState} />
        )}
      </div>
    );

}

export default ListarItemsCargados;




