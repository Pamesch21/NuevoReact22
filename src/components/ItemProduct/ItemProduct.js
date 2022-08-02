import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'


const ItemProduct = ({data}) => {
 
    const {title , price , stock, id} = data
   
    
return (
    <Link to={'/productos/${id}'}>
    <div className="item-product">
             <img src="/assets/mesa 1.jpg" alt="imagen producto" />
             <p>{title}</p>
             <span>{price}</span>
             <ItemCount stock={stock}/>
             
              <button>comprar</button>
    </div>
    </Link>
)

}
export default ItemProduct

