import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoGenialoso from "./logo.jsx";
import "./navBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <LogoGenialoso />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                Inicio
              </Nav.Link>
              <NavDropdown
                title="Productos"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#Veladores">
                  Veladores
                </NavDropdown.Item>

                <NavDropdown.Item href="#Espejos">
                  Espejos
                </NavDropdown.Item>

                <NavDropdown.Item href="#Lamparas">
                  Lamparas
                </NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="#link">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
