import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const handleSignOut = () => {
        signOut();
    };

    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">about</Link>
                {user ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/login">Login</Link>}
            </div>
        </nav>
    );
};

export default Header;
