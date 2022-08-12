import { createContext, useState} from "react";

const CartContext= createContext ()

const CartProvider= ({children } ) =>{
    const [cartProducts,setCartProducts]= useState([])
    
    const addProductToCart =(product)=>{

    const duplicados = cartProducts.some(item=>item.id===product.id)
    
    if (duplicados==true){
        const copiaArray = cartProducts.map ((item)=>{

        
            if (item.id===product.id) {

                return {...item,cantidad:item.cantidad+product.cantidad,
                }
            }

            else {return item}
    
        })
        console.log(copiaArray)
    setCartProducts(copiaArray)

    }
    else {setCartProducts([...cartProducts,product])} 
  


setCartProducts([...cartProducts, product])
}

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