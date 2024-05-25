import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { shopContext }  from '../../context/ShopContext'
import {CartItems} from '../cart/CartItems'
import '../cart/Cart.css'
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
  const {cartItems , totalCartAmount} = useContext(shopContext)
  const totalAmount = totalCartAmount()
  const navigate = useNavigate()
  
  return (
    <div>
      <div className='carttitle'>
        <h>Your Cart Items</h>
      </div>
      <div className='cartitems'>
        {PRODUCTS.map((product)=> {
        if(cartItems[product.id] !==0)
          return (<CartItems data = {product}/>)
      })
      
      }
    </div>
    {totalAmount >0 ?
    <div className='checkout'>
      <p> Total: ${totalAmount}</p>
      <button>Checkout</button>
      <button onClick={()=>navigate('/')}>Continue Shopping</button>

    </div> 
    : <h2> Your Cart is Empty</h2>
    }
      
    </div>
  )
}



