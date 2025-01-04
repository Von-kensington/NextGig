import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pricing.css';

const PricingPage = () => {
    const navigate = useNavigate();

    const handleUpgrade = (plan) => {
        // Mock payment process (replace with real implementation)
        alert(`You have chosen the ${plan} plan. Thank you for upgrading!`);
        navigate('/ai');
    };

    return (
        <div className="pricing-page">
            <h1>Choose Your Plan</h1>
            <p>Unlock premium features with one of our affordable plans.</p>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h2>Basic</h2>
                    <p>Access limited premium features</p>
                    <p className="price">$9.99 / month</p>
                    <button className="btn-secondary" onClick={() => handleUpgrade('Basic')}>
                        Select Plan
                    </button>
                </div>
                <div className="pricing-card">
                    <h2>Pro</h2>
                    <p>Full access to all premium content</p>
                    <p className="price">$19.99 / month</p>
                    <button className="btn-secondary" onClick={() => handleUpgrade('Pro')}>
                        Select Plan
                    </button>
                </div>
                <div className="pricing-card">
                    <h2>Enterprise</h2>
                    <p>For teams and organizations</p>
                    <p className="price">Contact Us</p>
                    <button className="btn-secondary" onClick={() => handleUpgrade('Enterprise')}>
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
