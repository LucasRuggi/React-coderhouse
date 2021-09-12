import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListarItemsCargados from "./components/container/itemListContainer";
import CarritoDetail from "./components/carritoDetail/carritoDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ListarItemsCargados} />
        <Route
          exact
          path="/categorias/:selector"
          component={ListarItemsCargados}
        />
        <Route exact path="/cart" component={CarritoDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
