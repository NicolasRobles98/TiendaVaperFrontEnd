import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBarExpand.css'

function NavBarExpand() {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
        <Navbar key={'sm'} expand="sm" variant='dark' className="bg-body-tertiary mb-3 fixed-top modo-oscuro">
          <Container fluid>
            <Navbar.Brand href="#">Car Wash</Navbar.Brand>
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
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Contáctanos</Nav.Link>
                  <NavDropdown
                    title="Tienda"
                    id="offcanvasNavbar-expand-sm" 
                  >
                    <NavDropdown.Item href="#action3">Productos</NavDropdown.Item>
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
      )
    </>
  );
}

export default NavBarExpand;