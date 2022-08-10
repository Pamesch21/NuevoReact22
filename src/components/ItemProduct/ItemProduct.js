import '../ItemProduct/ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemProduct = ({data}) => {
 
    const {title , price , stock, id,modelo,image} = data
   
    
return (
    <Link to={`/detail/${id}`}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Mesa</Card.Title>
        <Card.Text>
          mesas 
        </Card.Text>
        <Button variant="primary">$50000</Button>
      </Card.Body>
  

      <ItemCount stock={stock}/>
    </Card>
    <div className="item-product">

             <div className="image">
                
             
             </div>
 
         
    </div>
    
    </Link>
    
)

}

export default ItemProduct

