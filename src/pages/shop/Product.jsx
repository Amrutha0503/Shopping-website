import React, { useContext } from 'react'
import { shopContext } from '../../context/ShopContext';


export const Product = (props) => {
    const {id , productName , price , productImage} = props.data;
    const {addToCart , cartItems} = useContext(shopContext);

    const cartItemNumber = cartItems[id]
  return (
    <div className='Product'>
      <img src={productImage} />
      <div className='proddescription'>
      <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      
      <button className='addtocartbtn' onClick= {() => addToCart(id)}>
        Add to Cart {cartItemNumber > 0 && <> ({cartItemNumber})</>}
      </button>
      
    </div>
  )
}


