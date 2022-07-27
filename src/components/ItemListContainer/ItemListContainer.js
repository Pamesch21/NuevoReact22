
import products from '../../components/utils/products.mock'
import React, {useState, useEffect} from 'react'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({title})=> {

    const [catalogo, setcatalogo] = useState ([])

    
    const getProducts = () => new Promise ((resolve,reject) => {
        
        setTimeout (() => {
            resolve (products)
        },2000 )
    }

    )
    useEffect(()=> {
        const getProduct = async () => {
try {
    const responseLog = await getProducts()
    setcatalogo(responseLog)
}

catch (error){
    console.log(error)
}
        }
        getProduct ()
     },[])

    return (

        <div className="list-products" >
              <h1>{title}</h1>
              <ItemList dataProducts={catalogo} /> 
             </div>

    )
}
export default ItemListContainer