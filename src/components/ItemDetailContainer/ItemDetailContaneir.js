import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from "..//utils/products.mock"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    

const [Item, setItem]= useState ([])


const getItem = () => new Promise ((resolve,reject) => {
        
    setTimeout (() => {
        resolve (products[0])
    },2000 )
}


)

useEffect(()=> {
    const Itemawait = async () => {
try {
const responseLog = await getItem()
setItem(responseLog)
}

catch (error){
console.log(error)
}
    }
    Itemawait ()
 },[])






    return (
        <div className="container-item-detail">

<ItemDetail data={Item} />  
        </div>
    )
}

export default ItemDetailContainer