import React from 'react'
import { PRODUCTS } from '../../Products'
import {Product} from './Product'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shopping'>
      <div className='shopname'>
        <h2> Amrutha Shopping site </h2>
      </div>
      <div className='products'>
        
        {PRODUCTS.map((product) =>(<Product data = {product}/>) )}

      </div>
      
    </div>
  )
}


