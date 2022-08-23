import {useContext} from "react"
import { CartContext } from "../context/CartContext"

const Cart= (   ) =>{
const {cartProducts,clear} = useContext (CartContext)

return ( 
 <div>
    cartProducts.length
cartProducts.map((product) => 

(<div className="item-product"></div>
<img src= {product.image} alt ="imagen"/>
<span>{product.price}</span>
<span>{product.modelo}</span>) )




    


</div>  



)
}

export default Cart