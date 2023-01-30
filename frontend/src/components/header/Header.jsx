import React from 'react'
import "./Header.css"
import { CiUser } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {Link} from "react-router-dom"

const Header = (props) => {
  const {
    setLogin
  } = props;
  return (
    <div className="header" id="header">
        <div className="head-part">
          <Link to="/" className="logo"><img src={"./logo.png"} alt="logo"/></Link>
          <p className="shop-name">EcomRey</p>
          <CiUser className="user" onClick={()=>setLogin(true)}/>
        </div>
        <div className="cart-container">
          <Link to="/cart" className="cart"><AiOutlineShoppingCart/></Link>
          <div className="cart-nums-item">1</div>
        </div>
    </div>
  )
}

export default Header
