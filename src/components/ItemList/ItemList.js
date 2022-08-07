import { useContext } from "react"
import { CartContext } from "../context/CartContext" 
import ItemProduct from "../ItemProduct/ItemProduct"


const ItemList = ({dataProducts}) => {
    console.log("informacion:", useContext(CartContext))
    return(
        <>
            {dataProducts.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList