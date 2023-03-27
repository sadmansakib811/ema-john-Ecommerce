import React from 'react';
import './Product.css'
const Product = (props) => {
    
    const{img, name, seller, ratings, price}= props.product;
    // function o shop.jsx theke props er maddhome nia ashsi.
    const handleAddToCart = props.handleAddToCart;
  
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>${price}</p>
            <p>{seller}</p>
            <p>Rating:{ratings}</p>
            </div>
        <button onClick={()=>{handleAddToCart(props.product)}} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;