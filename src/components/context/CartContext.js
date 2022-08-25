import { createContext, useState} from "react";

const CartContext= createContext ()

const CartProvider= ({children } ) =>{
    const [cartProducts,setCartProducts]= useState([])
    
    const addProductToCart =(product)=>{

    const duplicados = cartProducts.find(item=>item.id===product.id)
    
    if (duplicados){
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

}

const clear = () => {
    setCartProducts([])
}

const remove = (id) => {
   const newcart = cartProducts.filter (product => product.id !==id) 
   setCartProducts (newcart) 

}



const data = {
    cartProducts,
    setCartProducts,
    clear,
    addProductToCart,
    remove
}

return (
<CartContext.Provider value={data}>
    
    {children}
    
    </CartContext.Provider>
)


}
export default CartProvider

export {CartContext}