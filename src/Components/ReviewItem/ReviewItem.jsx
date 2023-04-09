import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Review-item.css'

const ReviewItem = ({product, handleremoveFromCart}) => {
    // console.log(product)
    const {id, img, price, name, quantity} = product;
    return (
        
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-Details'>
                <p className='product-title'>{name}</p>
                <p>price: <span className='orange-text'>${price}</span></p>
                <p>Order Qty: <span className='orange-text'>{quantity}</span></p>
                
            </div>
            <button onClick={()=> handleremoveFromCart(id)} className='button-delete'><FontAwesomeIcon 
            className='fontawesomeIcon'
            icon={faTrashAlt}/></button>
        </div>
    );
};

export default ReviewItem;