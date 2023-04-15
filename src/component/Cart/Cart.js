import React from 'react'
import Model from '../UI/Model'
import'./cart.css'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'
export default function Cart(props) {

  const cartCtx= useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const hasItem = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
    
  }
  const cartItemAddHandler = item => {

    cartCtx.addItem(item)
  }

 const cartItems =  cartCtx.items.map((item) => (
      <CartItem 
      key = {item.id}
      name = {item.name}
      description ={item.description}
      price ={item.price}
      amount = {item.amount}
      onRemove = {cartItemRemoveHandler.bind(null, item.id)}
      inAdd = {cartItemAddHandler(null, item)}
      />
      ))



    
  return (
    <Model>
      {cartItems}   
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='actions'>
        <button onClick={props.onHideCart} className='button--alt'>close</button>
        {hasItem && <button className='button'>Order</button>}
      </div>
    </Model>
  )
}