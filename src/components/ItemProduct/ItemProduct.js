import '../ItemProduct/ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemProduct = ({data}) => {
 
    const {title , price , stock, id,modelo,image} = data
   
    
return (
    <Link to={`/detail/${id}`}>
    
    <div className="item-product">


    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title> 
        <Card.Text>
        {modelo}
        </Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
  

    </Card>
         
         
         
    </div>
    
    </Link>
    
)

}

export default ItemProduct

