import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    useEffect( () => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step 1: get id of the added product
        for( const id in storedCart ) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                 const quantity = storedCart[id];
                 addedProduct.quantity = quantity;
                 saveCart.push(addedProduct)
            }
            console.log(addedProduct)
        }
        setCart(saveCart)
    },[products])

    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     // step 1: get the id
    //     for (const id in storedCart) {
    //         console.log(id);
    //         //step 2: get the product by using id
    //         const addedProduct = products.find(product => product.id === id);
    //         console.log(addedProduct)
    //         // const quantity = 
    //     }
    // }, [products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;