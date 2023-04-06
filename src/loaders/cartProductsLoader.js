import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders = async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const saveCart = [];


    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // you need to follow or return an array like this
    // return[products, saveCart]
    // anthoer options return a object like this
    //return{products, saveCart}
    return saveCart;
}

export default cartProductsLoaders;