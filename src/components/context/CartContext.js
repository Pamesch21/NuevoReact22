import { createContext, useState} from "react";

const CartContext= createContext ()

const CartProvider= ({children } ) =>{
    const [cartProducts,setCartProducts]= useState([])
    
    
    
    const addProductToCart =(product)=>{
     

setCartProducts([...cartProducts, product])
}
console.log (cartProducts)
const clear = () => {
    setCartProducts([])
}

const data = {
    cartProducts,
    setCartProducts,
    clear,
    addProductToCart
}

return (
<CartContext.Provider value={data}>
    
    {children}
    
    </CartContext.Provider>
)


}
export default CartProvider

export {CartContext}