import React from 'react';
import './Products.css'

const Products = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='products-info'>
            <h4 className='products-name'>{name}</h4>
                <h5 className='price'>Price: ${price}</h5>
                <p className='seller'><small>Manufacturer:{seller}</small></p>
                <p className='ratting'><small>Ratting:{ratings}</small></p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Products;