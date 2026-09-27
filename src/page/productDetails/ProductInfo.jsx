// import React, { useContext } from 'react'
// import { CartContext } from '../../components/context/CartContext'
// import { TiShoppingCart } from 'react-icons/ti';
// import { FaStar, FaRegHeart } from "react-icons/fa6";
// import { BsCart4 } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import ProductImages from './ProductImages';

// function ProductInfo({ product }) {
//   const { cartItem, addToCart, favorites, removeFromFavoraites } = useContext(CartContext);

//   const handleeAddToCart = () => {
//     addToCart(product)

//     toast.success(
//       <div className="stoast-wrapper">
//         <img src={product.images[0]} alt="" className='toast-img' />
//         <div className="toast-content">
//           <strong>{product.title}</strong>
//           added to Cart
//           <div>
//             <button className='btn' onClick={() => navigate('/cart')}>View Cart </button>
//           </div>
//         </div>
//       </div>
//       , { duration: 3500 }
//     )
//     //favourit

//     const handleeAddToFav = () => {
//       const isInCart = cartItem?.some(item => item.id === product.id);

//       const isInFav = favorites.some(i => i.id === product.id)

//       if (isInFav) {
//         removeFromFavoraites(item.id)

//         toast.error(`${item.title}removed from favourits`)

//       } else {

//         addToFavorites(item)
//         toast.success(`${item.title}added To favourits`)

//       }


//     }
//   }

//   return (
//     <div className="item-details">
//       <div className="container">
//         <ProductImages product={product} />
//         <div className="details-item">
//           <h1 className="name">{product.title}</h1>
//           <div className="stars">
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <FaStar />
//             <BsCart4 />
//             <CiHeart />
//           </div>
//           <p className="price">${product.price}</p>

//           <h5>Availability: <span>{product.availabilityStatus}</span></h5>

//           <p className="description">{product.description}</p>
//           <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleeAddToFav}><FaRegHeart /></span>

//           <h5 className='stock'>Hurry Up! Only {p} <span>{product.availabilityStatus}</span></h5>
//           <button onClick={handleeAddToCart} className={`btn ${isInCart ? 'in-cart' : ''}`}>
//             {isInCart ? "item in cart" : "Add to cart"} <TiShoppingCart /></button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default productInfo

import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { TiShoppingCart } from 'react-icons/ti';
import { FaStar, FaRegHeart } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ProductImages from './ProductImages';

function ProductInfo({ product }) {
  const { cartItem, addToCart, favorites, removeFromFavoraites, addToFavorites } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ تعريف الحالات في مستوى المكوّن
  const isInCart = cartItem?.some(item => item.id === product.id);
  const isInFav = favorites?.some(item => item.id === product.id);

  // ✅ دالة الإضافة للسلة
  const handleeAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="stoast-wrapper">
        <img src={product.images[0]} alt="" className='toast-img' />
        <div className="toast-content">
          <strong>{product.title}</strong>
          added to Cart
          <div>
            <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  // ✅ دالة الإضافة/الإزالة من المفضلة (خارج handleeAddToCart)
  const handleeAddToFav = () => {
    if (isInFav) {
      removeFromFavoraites(product.id);
      toast.error(`${product.title} removed from favourites`);
    } else {
      addToFavorites(product);
      toast.success(`${product.title} added to favourites`);
    }
  };

  return (
    <div className="item-details">
      <div className="container">
        <ProductImages product={product} />
        <div className="details-item">
          <h1 className="name">{product.title}</h1>
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <BsCart4 />
            <CiHeart />
          </div>
          <p className="price">${product.price}</p>

          <h5>Availability: <span>{product.availabilityStatus}</span></h5>

          <p className="description">{product.description}</p>

          <span className={isInFav ? "in-fav" : ""} onClick={handleeAddToFav}>
            <FaRegHeart />
          </span>

          <h5 className='stock'>Hurry Up! Only {product.stock} <span>{product.availabilityStatus}</span></h5>

          <button onClick={handleeAddToCart} className={`btn ${isInCart ? 'in-cart' : ''}`}>
            {isInCart ? "Item in cart" : "Add to cart"} <TiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;