import React,{useState} from "react";

const ItemCount = ({stock,setQuantitySelected}) =>  {

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
             <button onClick={resta}>-</button> 
             <p>{contador}</p>
             <button onClick={addNumber}>+</button>
              </div>





    )
}

export default ItemCount
