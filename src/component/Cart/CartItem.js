const CartItem = (props) => {
    return(
        <div>
            <h2> {props.name}</h2> 
            <div>
              <span>{props.price}</span>
              <span>  x{props.amount}</span>
            </div>
            <div>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>         
        </div>
    )
}

export default CartItem