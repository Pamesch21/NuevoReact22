import React from 'react'
import Logo from '../../assets/logo.jpg.jpg'
import {Link} from 'react-router-dom'



export function   ImgLogo() {
  return (
     <div className='LogoContainer'>

<Link to={"/"}> <img  className= 'Logo' src={Logo} alt="" /></Link>

    </div>
  )
}

