import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])
    // ai state ta cart a selected product dekhanor jonno
const [cart, setCart]=useState([])
// nicher function ta amra product.jsx theke eikhane nia ashsi coz react a kono data back pathano jaina
// tai amra function ta aikhane rekhe eta k props er maddhome product.jsx theke call korbo
// eikhaner handleAddToCart function er j 'product' parameter ta nisi seta amra product.jsx theke
// button click er maddhome nitesi j kon product er button a user click korse.
    const handleAddToCart=(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
       }
    return (
        
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                key={product.id}
                product = {product}
                handleAddToCart= {handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
             <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;