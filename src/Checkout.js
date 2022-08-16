import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// import CurrencyFormat from 'react-currency-format';


function Checkout() {
    const [{cart}]=useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
      <img className='checkout__image' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='not showing'/>
      {cart.length === 0 ? (
        <div>
            <h1>Your Shopping Cart is empty</h1>
            <p>You have no items in your shopping cart.</p>
</div>)
        : (
            <div>
                <h1 className='checkout__title'>Good to see you</h1>
                 {cart.map(items =>(
                     
                    <CheckoutProduct
                    id={items.id}
                    title={items.title}
                    image={items.image}
                    price={items.price}
                    rating={items.rating}
                    />
                 ))}
            </div>
        )
      }
      </div>
      {cart.length > 0 && (
        <div className='checkout__right'>
            <Subtotal/>
          </div>
      )}
      
      
    </div>
  )
}

export default Checkout
