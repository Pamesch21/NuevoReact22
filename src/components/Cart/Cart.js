import {useContext} from "react"
import { CartContext } from "../context/CartContext"

const Cart= (   ) =>{
const {cartProducts,clear,remove} = useContext (CartContext)
console.log(cartProducts)
return ( 
 <div>

    { cartProducts.length > 0 ? 
    cartProducts.map((product) => 


    (<div key={product.id}><div className="item-product"></div>
    <img src= {product.image} alt ="imagen"/>
    <span>{product.cantidad}</span>
    <span>{product.price}</span>
    <span>{product.modelo}</span>
    <button onClick={clear}>Vaciar carrito</button>
    <button onClick={remove}>Borrar</button>
    
    </div>) ) : <h1>Hola mundo </h1>
     } <button onClick={remove}>TERMINAR COMPRA</button>
 

</div>  
)
}

export default Cart