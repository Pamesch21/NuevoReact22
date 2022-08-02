import React from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({data}) => {
    return (
<div className="item-product">
< img src= {data.image} alt ="imagen"/>

<span>{data.price}</span>
<span>{data.modelo}</span>

<ItemCount stock ={data.stock}/>

<button>comprar</button>

</div>






    )
}
 export default ItemDetail