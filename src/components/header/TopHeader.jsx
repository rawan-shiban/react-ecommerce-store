import React, { useContext } from 'react';
import Logo from '../../img/logo.png';
import { CiHeart } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import './header.css'
import { CartContext } from '../context/CartContext';
import SearchBox from './SearchBox';
function TopHeader() {
  const { cartItems , favorites } = useContext(CartContext)
  return (
    <div className='top-header'>
      <div className="container">
        <Link to="/"><img className='logo' src={Logo} alt="Logo" /></Link>
        <SearchBox />

        <div className="header-icons">
          <div className="icon">
            <Link to={"/favorites"}>
            
            <CiHeart />
            <span className='count'>{favorites.lenght}</span>
         </Link> </div>
          <div className="icon">
            <Link to="/cart">
              <BsCart4 />
              <span className='count'>
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader