import React from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector } from 'react-redux'

const  CartButtons=({ product })=> {
    const {cartList} = useSelector((state) => state.cart)
    const cartCount = cartList?.find((item) => item?.id === product?.id)
    console.log(cartCount);
    return (
        <>
          {cartCount > 0 ?<AfterCart product={product} cartCount={cartCount}/>:<BeforeCart product={product}/> }    
        </>
    )
}

export default CartButtons
