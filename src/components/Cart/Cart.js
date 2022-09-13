import {useContext, useState} from "react"
import { CartContext } from "../context/CartContext"
import Modal from "../../components/Modal/Modal"
import { collection,addDoc } from "firebase/firestore"
import db from "../utils/firebaseConfig"
import Button from 'react-bootstrap/Button';
import '../Cart/Cart.css'

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




<div className="cart"><img className="imagenes" src= {product.image} alt ="imagen"/>


<span>{product.cantidad}</span>

<Button variant="outline-success">Total : ${totalPrice}  </Button>
  
{product.price}$


</div>


    <div className= "VaciarCarrito">
    <Button variant="outline-primary" onClick={clear}>Vaciar carrito</Button>  
      <Button variant="outline-danger" onClick={remove}>Borrar</Button> 
     
    </div>


 
    </div>) ) : <h1>Carrito vacio</h1>
     } 

 { cartProducts.length > 0 && 
  <Button variant="primary" size="lg" onClick={() => handleModal (true)}>TERMINAR COMPRA</Button> }
 
{ModalMostrar &&
 <Modal close={handleModal}>
   
{CompraConf ? (   

<>
<h2>
   Su orden se genero correctamente
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
                 <Button variant="outline-danger">Enviar info</Button>
     
     </form>)
   }
  
  
</Modal>}
</div>  
)


  
}




export default Cart