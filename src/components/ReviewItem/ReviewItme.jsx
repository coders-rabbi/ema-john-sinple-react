import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItme = ({ product, handleRemoveFromCart}) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h3>{name}</h3>
                <p>Price: <span className='orage-text'>{price}$</span></p>
                <p>Order Quantity: <small className='orage-text'>{quantity}</small></p>
            </div>
            <button onClick={ () => handleRemoveFromCart(id)} className='delete-btn'> 
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItme;