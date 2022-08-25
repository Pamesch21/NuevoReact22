
import ItemCount from "../ItemCount/ItemCount";
import {Link } from 'react-router-dom';
import React, { useState, useContext } from "react";

const ItemDetail = ({data}) => {
    

    return (

<div className="item-product">
< img src= {data.image} alt ="imagen"/>
<span>{data.price}</span>
<span>{data.modelo}</span>


    
         <button><Link to="/cart">TERMINAR COMPRA</Link></button> :
         <ItemCount stock={data.stock}  productdata={data}  />
    

</div>

    )
}
 export default ItemDetail