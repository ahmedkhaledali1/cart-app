import React, { Fragment } from 'react'

import mealsImage from"../../assets/meals.jpg"
import './header.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
                             
    <Fragment>
        <header className='header'>
            <h1>React Meals</h1>
            <HeaderCartButton toshowcart={props.onShowCart}/>

        </header>
        <div className='main-image'>
            <img className='main-image-img' src={mealsImage} alt ="A table of full of delecious food" />
        </div>
    </Fragment>
  )
}
