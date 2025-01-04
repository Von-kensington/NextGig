import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const SignupScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Mock API call (replace with real API call)
        console.log('User registered:', formData);
        navigate('/login'); // Navigate to login after successful registration
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Sign Up</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                    </div>
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
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button type="submit" className="btn-primary">Sign Up</button>
                </form>
                <p className="login-link">
                    Already have an account? <span onClick={() => navigate('/login')}>Login</span>
                </p>
            </div>
        </div>
    );
};

export default SignupScreen;
