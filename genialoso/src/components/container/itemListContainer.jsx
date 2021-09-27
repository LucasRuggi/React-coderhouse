import { useState, useEffect } from "react";
import "./itemListContainer.css";
import { getFetch } from "../productos/productos";
import ItemList from "../tienda/itemList";
import { useParams } from "react-router-dom";
import LoaderIcon from "../utils/loaderIcon/loaderIcon";
//import { getFirestore } from "../../servicios/firebase";

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
        <div>
          <LoaderIcon />
        </div>
      ) : (
        <ItemList productos={productosState} />
      )}
    </div>
  );
}

export default ListarItemsCargados;

/*useEffect(() => {
    const dbQuery = getFirestore();

    if (selector === null) {
    }

    dbQuery
      .collection("items")
      //.where("categoria", "==", selector)
      .get()

      .then((item) => {
        setProductos(
          item.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [selector]);

  console.log(productosState);*/
