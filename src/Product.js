import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props) {
    const [{},dispatch]=useStateValue();
    const addToCart = () =>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                price:props.price,
                rating:props.rating,
            }
        })
    }
    return (
        <div className='products'>
            <div className='product__info'>
                <p>{props.title}</p>
                <p className='produce__price'>
                    <small>Rs</small>
                    <strong> {props.price}</strong>

                </p>
                <div className='product__rating'>
                    {Array(props.rating).fill().map((_) => (
                        <p>⭐</p>
                    ))
                    }
                </div>
            </div>

            <img src={props.image} alt='' />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
