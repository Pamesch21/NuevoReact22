
import products from '../../components/utils/products.mock'
import React, {useState, useEffect} from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import db from "../../components/utils/firebaseConfig"
import { collection, getDocs, where, query } from "firebase/firestore"



const ItemListContainer = ({title})=> {


    const [catalogo, setcatalogo] = useState ([])

    
const {categoryid}= useParams ()



   const getProducts = async () => {
    const productCollection = categoryid ? query ( collection(db, 'productos'),where ("category","==",categoryid) )
    :
    collection(db, 'productos')


    const productSnapshot = await getDocs(productCollection)
    const productList = productSnapshot.docs.map( (doc) => {
      let product = doc.data()
        product.id = doc.id
        return product

       

   })
    return productList

}

useEffect (() => {
 const getProduct = async () => {
 try{
    const Log = await getProducts () 
    setcatalogo(Log)
    console.log(Log)
 }

 catch (error ) {
    console.log (error)
 }
 }

getProduct ()
},[categoryid]) //eslint-disable-line react-hooks/exhaustive-deps


      

    return (

        <div  >
              <h1>{title}</h1>
              <ItemList dataProducts={catalogo} /> 
            
             </div>

    )
}

export default ItemListContainer