import * as ReactBooStrap from "react-bootstrap";
import LogoGenialoso from "./logo.jsx";
import "./navBar.css";

function NavBar() {
  return (
    <>
      <ReactBooStrap.Navbar bg="dark" variant="dark" expand="lg">
        <ReactBooStrap.Container>
          <ReactBooStrap.Navbar.Brand href="#home">
            <LogoGenialoso />
          </ReactBooStrap.Navbar.Brand>
          <ReactBooStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBooStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBooStrap.Nav className="me-auto">
              <ReactBooStrap.Nav.Link href="#home">
                Inicio
              </ReactBooStrap.Nav.Link>
              <ReactBooStrap.NavDropdown
                title="Productos"
                id="basic-nav-dropdown"
              >
                <ReactBooStrap.NavDropdown.Item href="#Veladores">
                  Veladores
                </ReactBooStrap.NavDropdown.Item>
                <ReactBooStrap.NavDropdown.Item href="#Espejos">
                  Espejos
                </ReactBooStrap.NavDropdown.Item>
                <ReactBooStrap.NavDropdown.Item href="#Lamparas">
                  Lamparas
                </ReactBooStrap.NavDropdown.Item>
              </ReactBooStrap.NavDropdown>
              <ReactBooStrap.Nav.Link href="#link">
                Contacto
              </ReactBooStrap.Nav.Link>
            </ReactBooStrap.Nav>
          </ReactBooStrap.Navbar.Collapse>
        </ReactBooStrap.Container>
      </ReactBooStrap.Navbar>
    </>
  );
}

export default NavBar;
