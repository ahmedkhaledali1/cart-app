import React from 'react'
import { useContext } from 'react'
import './headerCartButton.css'
import CartIcon from '../Cart/Carticon'
import CartContext from '../../store/CartContext'

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  const numberOfCarts = cartCtx.items.reduce((curNumber, item) =>{
    return curNumber + item.amount
  }, 0)
  return (

    <button onClick={props.toshowcart} className='button'>
     
        <span className='icon'> <CartIcon /> </span>
        <span >Your Cart</span>
        <span className='badge'>{numberOfCarts}</span>
    </button>
  )
}
