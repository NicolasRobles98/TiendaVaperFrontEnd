import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useNavigate } from "react-router-dom";

const NavBarExpand = () => {

  const navigate = useNavigate();


  const handleNavigateMenu = (event)=> {
    const route = event.currentTarget.getAttribute("value");
    navigate(route)
  }
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
        <Navbar key={'sm'} expand="sm" variant='dark' className="bg-dark mb-3 fixed-top modo-oscuro">
          <Container fluid>
            <Navbar.Brand value ="/" onClick={handleNavigateMenu}>Car Wash</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-sm" 
              aria-labelledby="offcanvasNavbar-expand-sm" 
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbar-expand-sm" >
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link value ="/" onClick={handleNavigateMenu}>Inicio</Nav.Link>
                  <Nav.Link href="#action2" value ="/contactanos">Contáctanos</Nav.Link>
                  <NavDropdown
                    title="Tienda"
                    id="offcanvasNavbar-expand-sm" 
                  >
                    <NavDropdown.Item value="/product" onClick={handleNavigateMenu}>Productos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Mis compras
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBarExpand;