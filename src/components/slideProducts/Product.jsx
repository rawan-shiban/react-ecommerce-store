import React, { useContext } from 'react'
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from '../context/CartContext';
useNavigate
import { GiDuration } from 'react-icons/gi';
function Product({ item }) {

  const navigate = useNavigate();

  const { cartItems, addToCart, addToFavorites, favorites, removeFromFavoraites } = useContext(CartContext)


  const isInCart = cartItems.some(i => i.id === item.id);
  const isInFav = favorites.some(i => i.id === item.id)
  const handleeAddToCart = () => {
    addToCart(item)

    toast.success(
      <div className="stoast-wrapper">
        <img src={item.images[0]} alt="" className='toast-img' />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to Cart
          <div>
            <button className='btn' onClick={() => navigate('/cart')}>View Cart </button>
          </div>
        </div>
      </div>
      , { duration: 3500 }
    )
  }

  //favourit

  const handleeAddToFav = () => {

    if (isInFav) {
      removeFromFavoraites(item.id)

      toast.error(`${item.title}removed from favourits`)

    } else {

      addToFavorites(item)
      toast.success(`${item.title}added To favourits`)

    }


  }


  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>

      <Link to={`/products/${item.id}`}>

        <span className='status-cart'>in cart</span>

        <div className="img-product">

          <img src={item.images[0]} alt="" />

        </div>

        <p className="name-product">{item.title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfStroke />
        </div>
        <p className="price">
          <span>$ {item.price} </span></p></Link>
      <div className="icons">
        <span className='btn-addtocart' onClick={() => addToCart(item)}><FaCartArrowDown /></span>
        <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleeAddToFav}><FaRegHeart /></span>
        <span><FaShare /></span>

      </div>
    </div>
  )
}

export default Product