
import ItemCount from "../ItemCount/ItemCount";
import {Link } from 'react-router-dom';
import React, { useState, useContext } from "react";
import '../ItemDetail/ItemDetail.css'
import Button from 'react-bootstrap/Button';

const ItemDetail = ({data}) => {
    

    return (

<div className="item-product">

<div className= "datos">
< img className = "foto" src= {data.image} alt ="imagen"/>
</div>


<div  className ="Botones">
<h2>
  Mesa Lux
</h2>
<Button variant="outline-success">$ {data.price}</Button>

</div>


<div className="BotonStock">
<ItemCount stock={data.stock}  productdata={data}  />
 </div>  


<div className="Boton">

 </div>   
 <Button variant="light"><Link to="/cart">TERMINAR COMPRA</Link></Button>
</div>

    )
}
 export default ItemDetail