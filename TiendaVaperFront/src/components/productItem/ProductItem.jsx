import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardSubtitle from 'react-bootstrap/CardSubtitle';

const ProductItem = ({nameItem, descriptionItem, amountItem, priceItem}) => {
  return (
    <Card style={{ width: '18rem', minWidth : "18rem", maxWidth : "19rem" }}>
      <Card.Img variant="top" src="https://distnica.com/wp-content/uploads/2022/02/shampoo-para-carros.jpg" />
      <Card.Body className='h-100 d-inline-block'>
        <Card.Title>{nameItem}</Card.Title>
        <CardSubtitle>Precio: ${priceItem}</CardSubtitle>
        {/* <CardSubtitle>Cantidad: {amountItem}</CardSubtitle> */}
        <Card.Text>
          Descripción: {descriptionItem}
        </Card.Text>
        <Button variant="primary" className='align-items-bottom aling-bottom'>Ver producto</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;