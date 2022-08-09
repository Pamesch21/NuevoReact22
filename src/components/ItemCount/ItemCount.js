import React,{useState, useContext} from "react";
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';



const ItemCount = ({stock,setQuantitySelected}) =>  {
    
    /*const {CartProducts, setCartProducts}= useContext(CartContext)*/

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

setQuantitySelected(contador)

        
       }

    return (

<div className='countProd'> 
         
             <p>{contador}</p>
             <Button onClick={resta}>-</Button>
             <Button onClick={addNumber}>+</Button>
             <Button onClick={onAdd} size="lg">
             AGREGAR AL CARRITO
      </Button>
              </div>
    )
}

export default ItemCount
