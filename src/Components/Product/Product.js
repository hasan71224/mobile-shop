import React from 'react';
import './Product.css'
import { BsCartPlus } from 'react-icons/bs';

const Product = (props) => {
    const {id, name, img, price} = props.product
    const {product, handleAddToCart} = props
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <h1>{name}</h1>
                <p>price: {price}</p>
            </div>
            <div className='btn-cart' onClick={handleAddToCart(product)}>
                <p className='btn-p'>ADD TO CART </p>
                <BsCartPlus></BsCartPlus>
            </div>
        </div>
    );
};

export default Product;