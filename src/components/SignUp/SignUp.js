import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("your two password didn't match");
            return;
        }
    };

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>

                <p className="form-confirmation">
                    Already have an account?
                    <Link className="form-link" to="/login">
                        Login
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

export default SignUp;
