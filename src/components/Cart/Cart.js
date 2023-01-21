import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;
