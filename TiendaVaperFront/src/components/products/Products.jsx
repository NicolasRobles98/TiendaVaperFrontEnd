import { useEffect, useState } from "react";
import NavBarExpand from "../navBar/NavBarExpand";
import ProductItem from "../productItem/ProductItem";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://localhost:7099/api/Product/GetAll", {
            headers: {
                accept: "application/json",
                // "Authorization" :`Bearer ${user.token}`
            }
        })

            .then(response => response.json())
            .then((productData) => {
                const productsMapped = productData.map((product) => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    amount: product.amount,
                    price: product.price

                })).sort((a, b) => b.id - a.id)
                setProducts(productsMapped);
            })
            .catch((error) => {
                console.error(error);
            })
    })

    const productsMappedToShow = products
        .map(produItem => (<ProductItem
            key={produItem.name}
            nameItem={produItem.name}
            descriptionItem={produItem.description}
            amountItem={produItem.amount}
            priceItem={produItem.price}
        />));


    return (
        <>
            <NavBarExpand />
            <div className="container" style={{paddingTop:"5rem", paddingBottom : "3em"}}>
                <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-4 ">
                    {productsMappedToShow}
                </div>
            </div>

        </>

    )
}

// style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: "5rem",
//     minWidth: "100vw",
//     paddingLeft: "12.5%" // Para que ocupe toda la pantalla
// }}

export default Products;