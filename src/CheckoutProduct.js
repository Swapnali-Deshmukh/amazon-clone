import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
    
    const [{cart},dispatch]=useStateValue();

    const removeFromCart = () =>{
        console.log("Hiii"+ props.id)
        dispatch({
            type:'REMOVE_FROM_CART',
            id:props.id,
               
            
    })
    }
  return (
  
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={props.image} alt=''/>
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'> {props.title}</p>
        <p className='checkoutProduct__price'>
            <small>Rs</small>
            <strong> {props.price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
                    {Array(props.rating).fill().map((_) => (
                        <p>⭐</p>
                    ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
