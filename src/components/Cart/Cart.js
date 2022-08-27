import {useContext, useState} from "react"
import { CartContext } from "../context/CartContext"
import Modal from "../../components/Modal/Modal"
import { collection,addDoc } from "firebase/firestore"
import db from "../utils/firebaseConfig"


const Cart= (   ) =>{
const {cartProducts,clear,remove,totalPrice} = useContext (CartContext)
const [ModalMostrar, setModalMostrar] = useState (false)
console.log(totalPrice)
const [CompraConf, setCompraConf] = useState ()

const [order] = useState({
   items: cartProducts.map((product) =>{
     return{
        id: product.id,
        title: product.title,
        price: product.price
       }}),
   
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalPrice
})
const [formData, setformdata] = useState({

   name: '',
   phone:'',
   email:'',
 
 
 })


const handleModal = (handle) => {
   handle === true ? setModalMostrar (true) : setModalMostrar (false)}

   
   const handleChange = (e)  => {
      
      setformdata ({...formData,[e.target.name]:e.target.value}) 
   }
   
   const sendData = (e) => {e.preventDefault ()  
      pushData ({...order,buyer:formData}) 
}  

   const pushData = async (newOrder) => {
const collectionOrder = collection (db, 'ordenes') 
const orderDoc = await addDoc (collectionOrder, newOrder)
console.log (orderDoc)
setCompraConf (orderDoc.id)
   }
   return ( 
   
 <div>

    { cartProducts.length > 0 ? 
    cartProducts.map((product) => 


    (<div key={product.id}><div className="item-product"></div>
    <img src= {product.image} alt ="imagen"/>
    <span>{product.cantidad}</span>
    <span>{product.price}</span>
    <span>{totalPrice}</span>
    <span>{product.modelo}</span>
    <button onClick={clear}>Vaciar carrito</button>
    <button onClick={remove}>Borrar</button>
    
    </div>) ) : <h1>Hola mundo </h1>
     } 

 { cartProducts.length > 0 && 
   <button onClick={() => handleModal (true)}>TERMINAR COMPRA</button> }
 
{ModalMostrar &&
 <Modal close={handleModal}>
   
{CompraConf ? (   

<>
<h2>
   su orden se genero correctamente
</h2>

<h3>
   El numero de su orden es {CompraConf}
</h3>
</>

     ): ( <form onSubmit={sendData}>
      <input 
               type="text" 
               name = 'name' 
               onChange={handleChange}
               placeholder="Name"
               value = {formData.name}
               />
     
     <input 
               type="number" 
               name = 'phone' 
               onChange={handleChange}
               placeholder="phone"
               value = {formData.phone}
               />
     
     <input 
               type="email" 
               name = 'email' 
               onChange={handleChange}
               placeholder="ingresar email"
               value = {formData.email}
               />
                   <button type= "sumbit">Enviar info</button>
     
     </form>)
   }
  
  
</Modal>}
</div>  
)


  
}




export default Cart