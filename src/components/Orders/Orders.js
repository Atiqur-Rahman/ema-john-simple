import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handleRemoveProduct = (product) => {
        const rest = cart.filter((pd) => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    };
    return (
        <div>
            <div className="shop-container">
                <div className="review-items-container">
                    {cart.map((product) => (
                        <ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>
                    ))}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={() => navigate('/shipment')}>Proceed shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;
