
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import Logo from './components/NavBar/Logo';
import Home from './components/pages/Home'
import Contacto from './components/pages/Contacto'
import Productos from './components/pages/Productos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContaneir';


function App() {
  const styleApp = { padding: '10px 20px', }
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:categoryid" element={<Productos/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
