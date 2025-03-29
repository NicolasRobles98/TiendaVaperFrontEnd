import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function FilterMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        Filtrar
      </Button>
      <Offcanvas show={show} onHide={handleClose} name= 'Enable both scrolling & backdrop' scroll= {true} backdrop= {true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filtrar Productos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lista de filtrado
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default FilterMenu;