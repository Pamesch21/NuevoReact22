import React,{useState, useContext} from "react";
import { CartContext } from "../context/CartContext";





const ItemCount = ({stock,setQuantitySelected,productData}) =>  {
    
    const {CartProducts, setCartProducts}= useContext(CartContext)

    let stockInicial = stock 


    const [contador,setContador]= useState (1)

    const addNumber = () => {
        if (stockInicial>contador) {

            setContador(contador + 1)
        }
    }

    const resta = () => {
        if (contador> 1){
            setContador(contador - 1)
        }
    }
    const onAdd = () => {
console.log("AGREGAR AL CARRITO:",productData)
setQuantitySelected(contador)
setCartProducts([productData])
        
       }

    return (

<div className='countProd'> 
             <button onClick={resta}>-</button> 
             <p>{contador}</p>
             <button onClick={addNumber}>+</button>
             <button onClick={onAdd}>AGREGAR AL CARRITO</button>
              </div>





    )
}

export default ItemCount
