import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart, handleClearCart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    // Create an object to store the quantities of each product
    const quantities = {};
    for (const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        // Increment the quantity for this product in the quantities object
        quantities[product.name] = (quantities[product.name] || 0) + product.quantity;
    }

    const tax = (totalPrice*7)/100;
    const grandTotal = (tax+totalPrice+totalShipping);

    return (
        <div className='cart'>
           <h2>Cart</h2>
           {
            // Map over the unique product names and display the total quantity for each group
            Object.keys(quantities).map(name =>
            <div key={name}>
                <p>{name}</p>
                <p>Item Quantity: {quantities[name]}</p>
                <hr />
            </div>)
           }
             <h5>Total Product: {cart.length}</h5>
             <p>Total Price: ${totalPrice.toFixed(2)}</p>
             <p>Total Shipping Cost: {totalShipping.toFixed(2)}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
             <button onClick={handleClearCart} className='btn-clear-cart'> 
             <span>Clear Cart</span>
             <FontAwesomeIcon  icon={faTrashAlt}/>
                </button> 
        </div>
    );
};

export default Cart;
