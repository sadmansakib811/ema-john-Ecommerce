import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    //const {cart} = props;
    // system of calculating the total value of cart:
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    // forOf loop
    for (const product of cart){
        totalPrice = totalPrice+product.price;
        totalShipping = totalShipping+ product.shipping
    }
    const tax = (totalPrice*7)/100;
    const grandTotal = (tax+totalPrice);
    return (
        <div className='cart'>
           <h2>Cart</h2>
             <p>Selected Items: {cart.length}</p>
             <p>Total Price: ${totalPrice}</p>
             <p>Total Shipping: {totalShipping}</p>
             <p>Tax: ${tax}</p>
             <h3>Grand Total: ${grandTotal}</h3> 
        </div>
    );
};

export default Cart;