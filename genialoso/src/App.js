import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/navBar";
import CrearTitulo from "./components/container/itemListContainer";


function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <CrearTitulo titulo="Bienvenidos a Genialoso" />
    </div>
  );
}

export default App;
