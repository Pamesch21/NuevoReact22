import './ItemProduct.scss'
import ItemCount from '../../ItemCount/ItemCount'

const ItemProduct = ({data}) => {
 
    const {title , price , stock} = data
   
    
return (

    <div className="item-product">
             <img src="/assets/mesa 1.jpg" alt="imagen producto" />
             <p>{title}</p>
             <span>{price}</span>
             <ItemCount stock={stock}/>


             
              <button>comprar</button>
    </div>
)

}
export default ItemProduct

