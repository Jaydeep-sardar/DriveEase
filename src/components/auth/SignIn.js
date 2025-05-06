import React, { useState } from 'react';
import './Auth.css';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the sign-in logic
        console.log('Sign in attempt:', formData);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Sign In to DriveEase</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="auth-button">Sign In</button>
                    </div>
                    <div className="auth-links">
                        <a href="/forgot-password">Forgot Password?</a>
                        <p>
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn; 