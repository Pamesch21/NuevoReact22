
import products from '../../components/utils/products.mock'
import React, {useState, useEffect} from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title})=> {


    const [catalogo, setcatalogo] = useState ([])

    
const {categoryid}= useParams ()
const filtradoCategoria= products.filter ((products) => products.category === categoryid)

    const getProducts = () => new Promise ((resolve,reject) => {
        
        setTimeout (() => {
      if (categoryid) {
        resolve (filtradoCategoria)

     }
           else {resolve  (products)} 

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
     },[categoryid])

    return (

        <div  >
              <h1>{title}</h1>
              <ItemList dataProducts={catalogo} /> 
            
             </div>

    )
}

export default ItemListContainer