import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart, setCart]=useState([])
    // console.log(cart);
    const handleAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart, product]
        setCart(newCart)
        // console.log(setCart);
    }
    // choose For Me
    function chooseForMe(){
        const choose = Math.floor(Math.random() * cart.length)
        // console.log(choose, cart[choose]);
        setCart([cart[choose]]);
    }
    // delete all item
    function refresh(){
        setCart([])
    }

    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
 
    return (
        <div className='shop-Container'>
            {/* <div>
                {
                    cart.map(item=><h1 key={item.id} cart={item}>{item.name}</h1>)
                }
            </div> */}
            {/* //shop container */}
                <div className='product-container'>
                   {
                       products.map(product=> <Product key={product.id}
                         product={product}
                         handleAddToCart = {handleAddToCart}
                         > 
                         </Product>)
                   } 
                </div>

            {/* cart container */}
            <div className='cart-container'>
                <h1>Cart Option</h1>
                {
                    cart.map(item=> <Cart 
                        key={item.id}
                        cart={item}
                        > 
                    </Cart>)
                }
                <button onClick={chooseForMe}>Choose For Me</button>
                <button onClick={refresh}>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;