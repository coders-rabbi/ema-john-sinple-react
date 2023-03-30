import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='products-info'>
                <h4 className='products-name'>{name}</h4>
                <h5 className='price'>Price: ${price}</h5>
                <p className='seller'><small>Manufacturer:{seller}</small></p>
                <p className='ratting'><small>Ratting:{ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Products;