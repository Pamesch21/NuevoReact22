import React from 'react'
 import CartWidget from "./CartWidget"
 import {ImgLogo} from "./Logo.js" 
 import {Link} from 'react-router-dom'
 import './NavBar.css';



const NavBar = () => {
  
return (
 
  
<nav className="navbar bg-light">
  
  <div className="container-fluid">
  <ImgLogo />
    <a className="navbar-brand" href="#">Muebles Sch</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <Link to={"/"}><a className="nav-link active" aria-current="page" >Home</a></Link>
          <Link to={"/contacto"}><a className="nav-link active" aria-current="page" href="#">Contacto</a></Link> 
            <a className="nav-link active" aria-current="page" href="#"></a>
          </li>
          <li className="nav-item">

          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
            </a>
            <ul className="dropdown-menu">
   
    
              <li><Link to={"/productos/Mesa"}>Mesa</Link></li>
              <li><Link to={"/productos/Silla"}>Silla</Link></li>
              <li><Link to={"/productos/Cajonera"}>Cajonera</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
           
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
      <CartWidget/>    </div>
  </div>
</nav>

 

)
}

export default NavBar