import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'


const ItemProduct = ({data}) => {
 
    const {title , price , stock, id,modelo} = data
   
    
return (
    <Link to={`/detail/${id}`}>
    <div className="item-product">
             <img src="/assets/mesa 1.jpg" alt="imagen producto" />
             <p>{title}</p>

             <span>{price}</span>

             <ItemCount stock={stock}/>
             
             <span>{modelo}</span>
              <button>Comprar</button>
    </div>
    </Link>
)

}
export default ItemProduct

