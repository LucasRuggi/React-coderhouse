import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CarritoNavBar from "./CarritoNavBar/CarritoNavBar";
import LogoGenialoso from "./logo.jsx";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navBarFondo">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <LogoGenialoso />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="txtLink">
                  Inicio
                </Link>
              </Nav.Link>

              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <Link to="/categorias/veladores" className="txtLink">
                  <NavDropdown.Item href="#Veladores123">
                    Veladores
                  </NavDropdown.Item>
                </Link>

                <Link to="/categorias/espejos" className="txtLink">
                  <NavDropdown.Item href="#Espejos123">
                    Espejos
                  </NavDropdown.Item>
                </Link>

                <Link to="/categorias/lamparas" className="txtLink">
                  <NavDropdown.Item href="#Lamparas123">
                    Lamparas
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            <CarritoNavBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
