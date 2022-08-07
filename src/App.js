
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Logo from './components/NavBar/Logo';
import Home from './components/pages/Home'
import Contacto from './components/pages/Contacto'
import Productos from './components/pages/Productos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContaneir';
import Checkout from './components/pages/Checkout';
import CartProvider from './components/context/CartContext';

function App() {
  const styleApp = { padding: '10px 20px', }
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:categoryid" element={<Productos/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>


  );
}

export default App;
