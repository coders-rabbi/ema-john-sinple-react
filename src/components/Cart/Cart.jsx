import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart}) => {
    // const cart = props.cart;

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 /100;

    let grandTotal = total + tax + totalShipping;
    return (
        <div className='cart'>
            <h3>Products Summary</h3>
            <div className='products-summary-info'>
                <p>Selected Items: {quantity}</p>
                <p>Total: ${total}</p>
                <p>Total Shopping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon className='clear-btn-icon' icon={faTrashAlt} />
                    </button>
            </div>
        </div>
    );
};

export default Cart;