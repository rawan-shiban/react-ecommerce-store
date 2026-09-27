import React, { use, useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import PageTransition from '../../components/PageTransition'
import Product from '../../components/slideProducts/Product'

function favorites() {
    const {favorites} = useContext(CartContext)
  return (
   <PageTransition>
    <div className="category-products FavoritesPage">
<div className="container">
    <div className="top-slide">
        <h2>Your Favorites</h2>
    </div>
    {favorites.length === 0 ? (
        <p>NO Favorites Products yet</p>
    ):(<div className="products">
        {
            favorites.map(item=>(
                <Product item={item} key={item.id}/>
            ))
        }
    </div>)}
</div>
    </div>
   </PageTransition>
  )
}

export default favorites