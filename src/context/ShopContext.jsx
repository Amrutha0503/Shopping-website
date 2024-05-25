import React, { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../Products'

export const shopContext = createContext(null)

const getDefaultCartItems = () => {
    let cart = {}
    for( let i=1 ; i < PRODUCTS.length+1 ; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const[cartItems , setItems] = useState(getDefaultCartItems());

    const addToCart =(itemId) =>{
        setItems((previous)=> ({...previous , [itemId] : previous[itemId] + 1}))
        
    }

    const removeFromCart =(itemId) =>{
        setItems((previous)=> ({...previous , [itemId] : previous[itemId] - 1}))
        
    }
    
    const updateCount = (newAmount,itemId) => {
        setItems((previous) => ({...previous , [itemId] : newAmount}))
    }

    const totalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item)) /* getting info complete info (id , price , name..) of product from cart */
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount

    }

    const contextValues = {cartItems , addToCart , removeFromCart, updateCount , totalCartAmount }
    console.log(cartItems)
    
  return (
    <shopContext.Provider value={contextValues}> {props.children} </shopContext.Provider>
  )
}


