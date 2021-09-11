import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/navBar";
import ListarItemsCargados from "./components/container/itemListContainer";



function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ListarItemsCargados/>


    </div>
  );
}

export default App;
