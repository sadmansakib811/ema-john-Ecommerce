import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    // item cart theke delete korar jonno:
    const [cart, setCart] = useState(savedCart);
    const handleremoveFromCart=(id) =>{
        // id er sathe jeta match korbe sei product ta bad dia baki gula nibo
       const remaining = cart.filter(product => product.id !== id);
       setCart(remaining);
    //    local storage thekeo dlt korte hbe naile reload dile dlt item abr back ashbe.
    //  fakedb file a ekta removefromdb function call kore setai id dia dibo:
    removeFromDb(id);
    
    }

    // cart clear korar button er function likhe seta cart.jsx a pathabo.karon button oikhane:
    // same nicher handleclearcart funtion ta shop.jsx eo lekha lagbe naile oikhane clear buton kaj korbena
    const handleClearCart =()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleremoveFromCart={handleremoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
               <Cart 
               
               cart={cart}
               handleClearCart = {handleClearCart}
               ></Cart>
            </div>
        </div>
    );
};

export default Orders;