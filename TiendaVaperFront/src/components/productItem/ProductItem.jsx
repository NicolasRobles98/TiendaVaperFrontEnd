import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardSubtitle from 'react-bootstrap/CardSubtitle';

import { useNavigate } from "react-router-dom";


const ProductItem = ({nameItem, descriptionItem, amountItem, priceItem}) => {
  const navigate = useNavigate();

  const handleNavigateMenu = (event)=> {
    const route = event.currentTarget.getAttribute("value");
    const button = event.currentTarget;
    const productData = {
      nameItem: button.getAttribute("data-name"),
      descriptionItem: button.getAttribute("data-description"),
      amountItem: button.getAttribute("data-amount"),
      priceItem: button.getAttribute("data-price"),
    };
    navigate(route, { state: productData })
  }

  return (
    <Card style={{ width: '18rem', minWidth : "18rem", maxWidth : "19rem" }}>
      <Card.Img variant="top" src="https://distnica.com/wp-content/uploads/2022/02/shampoo-para-carros.jpg"/>
      <Card.Body className='d-flex flex-column h-100'>
        <Card.Title>{nameItem}</Card.Title>
        <CardSubtitle>Precio: ${priceItem}</CardSubtitle>
        <Card.Text>Cantidad: {amountItem}</Card.Text>
        <Card.Text className='text-truncate w-200'>
          Descripción: {descriptionItem}
        </Card.Text>
        <Button variant="primary" className='align-items-bottom aling-bottom' style={{marginTop : "auto", maxWidth: "125px"}} value={"/products/ProductPage"} onClick={handleNavigateMenu} 
          data-name={nameItem}
          data-description={descriptionItem}
          data-amount={amountItem}
          data-price={priceItem}>
            Ver producto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;