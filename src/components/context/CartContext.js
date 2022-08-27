import { createContext, useState} from "react";

const CartContext= createContext ()

const CartProvider= ({children } ) =>{
    const [cartProducts,setCartProducts]= useState([])
    const [totalPrice, settotalPrice] = useState (0)


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
settotalPrice (totalPrice + product.cantidad * product.price)
console.log ("a",product.price)
}

const clear = () => {
    setCartProducts([])
    settotalPrice (0)
}

const remove = (id) => {
   const newcart = cartProducts.filter (product => product.id !==id)
   const prod = cartProducts.find (product => product.id ===id) 
   settotalPrice (totalPrice - prod.cantidad * prod.price)
   setCartProducts (newcart) 


}


const data = {
    cartProducts,
    setCartProducts,
    clear,
    addProductToCart,
    remove,
    totalPrice
}

return (
<CartContext.Provider value={data}>
    
    {children}
    
    </CartContext.Provider>
)


}
export default CartProvider

export {CartContext}