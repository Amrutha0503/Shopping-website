import React , {useContext} from 'react'
import {shopContext} from '../../context/ShopContext'

export const CartItems = (props) => {
    const { id , productName , price , productImage  } = props.data
    const {cartItems , addToCart , removeFromCart , updateCount} = useContext(shopContext);
  return (
    <div className='cartitem'>
        <img src={productImage}></img>
        <div className='cartitemdesc'>
            <p> 
                <b> {productName} </b>
            </p>
            <p> ${price} </p>
            <div className='counthandler'>
              <button onClick={()=>removeFromCart(id)} > - </button>
              <input value={cartItems[id]} onChange={(e)=>updateCount(Number(e.target.value),id)}/>
              <button onClick={()=>addToCart(id)}> + </button>
            </div>

        </div>
       
      
    </div>
  )
}

 



