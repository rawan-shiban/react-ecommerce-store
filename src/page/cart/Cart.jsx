import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import './cart.css'
import PageTransition from '../../components/PageTransition'

function Cart() {
    const { cartItems, setcartItems, increaseQuantity, decreaseQuantity , removeFormCart } = useContext(CartContext)
    console.log(cartItems)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
      <PageTransition>
          <div className='checkout'>
            <div className="ordersummary">
                <h4>Order Summary</h4>
                <div className="items">
                    {cartItems.length === 0 ? (
                        <p>Your Cart is empty. </p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className="item-cart" key={index}>
                                <div className="img-name">
                                    <div className="img-item">
                                        <img src={item.images[0]} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>{item.title}</h1>
                                        <p className='price-item'>${item.price}</p>
                                        <div className="quantity-control">
                                            <button onClick={() => increaseQuantity(item.id)}>-</button>
                                            <span className='quantity'>1</span>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => increaseQuantity(item.id)} className='delete-item'><FaTrashAlt /></button>

                            </div>
                        ))
                    )}
                </div>

                <div className="bottom-summary">
                    <div className="shop-table">
                        <p>Totle:</p>
                        <span className='total-checkout'>${total.toFixed(2)}</span>
                    </div>
                    <div className="button-div">
                        <button className='submit'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
      </PageTransition>
    )
}

export default Cart