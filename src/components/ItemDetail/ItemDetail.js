import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import {Link } from 'react-router-dom';


const ItemDetail = ({data}) => {
    const [quantitySelected,setQuantitySelected] = useState (0)


    return (

<div className="item-product">
< img src= {data.image} alt ="imagen"/>

<span>{data.price}</span>
<span>{data.modelo}</span>



{console.log("quantitySelected: ", quantitySelected)}
    {
        quantitySelected > 1 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} stock={data.stock}/>
    }

    
</div>






    )
}
 export default ItemDetail