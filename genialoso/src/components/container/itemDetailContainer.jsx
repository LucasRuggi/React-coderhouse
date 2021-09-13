import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFetch } from "../productos/productos";
import LoaderIcon from "../utils/loaderIcon/loaderIcon";
import ItemDetail from "./tienda/itemDetail";

export default function ItemDetailContainer() {
  const [productosState, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idSelector } = useParams();

  useEffect(() => {
    if (idSelector) {
      getFetch.then((res) => {
        setProductos(res.filter((idProducto) => idProducto.id === idSelector));
        setLoading(false);
      });
    } else {
      getFetch.then((res) => {
        setProductos(res);
        setLoading(false);
      });
    }
  }, [idSelector]);

  return (
    <div className="d-flex justify-content-center mr-2 mt-5">
      {loading ? (
        <div>
          <LoaderIcon />
        </div>
      ) : (
        <ItemDetail productos={productosState} />
      )}
    </div>
  );
}
