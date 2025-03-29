import NavBarExpand from "../navBar/NavBarExpand";
import Card from 'react-bootstrap/Card';



import { useLocation } from "react-router-dom";

const ProductPage = () => {
    const location = useLocation();
    const { nameItem, descriptionItem, amountItem, priceItem } = location.state || {};

    return (
        <>
            <NavBarExpand />
            <div style={{display : "block", width : "100%", paddingTop: "5em", paddingLeft :"10px", paddingRight: "10px", paddingBottom: "20px"}}>
                <Card style={{maxWidth: "800px", margin : "auto"}}>
                    <Card.Img variant="top" src="https://distnica.com/wp-content/uploads/2022/02/shampoo-para-carros.jpg" style={{maxWidth : "400px", margin : "auto"}}/>
                    <Card.Body>
                        <Card.Text>
                            {nameItem}
                        </Card.Text>
                        <Card.Text>
                            Descripción: {descriptionItem}
                        </Card.Text>
                        <Card.Text>
                            Cantidad: {amountItem}
                        </Card.Text>
                        <Card.Text>
                            Precio: ${priceItem}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        </>
    )
}

export default ProductPage;