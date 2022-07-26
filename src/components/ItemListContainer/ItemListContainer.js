import ItemProduct from "../NavBar/ItemProduct/ItemProduct";
import React from "react";

const ItemListContainer = ({title})=> {

    const product1 = {
        title: "mesa madera",
        price: 50000,
        image: 'mesa 1.jps',
        stock:  5
    }
    const product2={
        title: "silla",
        price: 1000,
        image: 'mesa 1.jps',
        stock:  4
    }

    return (
        

        <div className="list-products" >
              <h1>{title}</h1>
              <ItemProduct data={product1} />
              <ItemProduct data={product2}/>
             </div>

    )
}
export default ItemListContainer