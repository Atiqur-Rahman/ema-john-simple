import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>This is orders: {products.length}</h1>
            <h2>Cart has: {cart.length}</h2>
        </div>
    );
};

export default Orders;
