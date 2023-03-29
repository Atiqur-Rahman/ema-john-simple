import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p className="form-confirmation">
                    New to Ema-John?
                    <Link className="form-link" to="/signup">
                        Create an account
                    </Link>
                </p>
                <p className="line-style">
                    <span>or</span>
                </p>
                <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <img style={{ width: '32px', paddingRight: '8px' }} src={require('../../google.png')} alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
