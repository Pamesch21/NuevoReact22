import {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../utils/firebaseConfig'


const ItemDetailContainer = () => {

const {id}= useParams ()

const [Item, setItem]= useState ([])

const getItem = async () =>  {
    const docref = doc (db,"productos", id)
    const docSnap = await getDoc (docref)
    const product = {...docSnap.data(), id: docSnap.id}

    return product
 
}



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