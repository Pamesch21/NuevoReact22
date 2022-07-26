
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import Logo from  './components/NavBar/Logo';
function App() {
const styleApp = {padding:'10px 20px', }
  return (
    //JSX
    
    <div className="container" style= {styleApp}>
          <NavBar />
          <ItemListContainer/>
     
          <div className='main-container'>   
          <h1>Productos</h1>
          
          <div className='list-products' >
      
          </div>
          <i className="bi bi-cart-plus-fill"></i>\
           </div>
    </div>
  );
}

export default App;
