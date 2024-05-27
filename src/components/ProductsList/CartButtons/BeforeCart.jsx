import React from 'react'
import './CartButton.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../../redux/cart'


const BeforeCart = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={() => dispatch(addtoCart(product))}>Add to Cart</button>
    </div>
  )
}

export default BeforeCart
