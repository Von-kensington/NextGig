import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AI.css';

const AiPage = ({ isPaidUser }) => {
    const navigate = useNavigate();

    if (!isPaidUser) {
        return (
            <div className="paywall">
                <h1>Access Restricted</h1>
                <p>This page is available to premium users only.</p>
                <button className="btn-primary" onClick={() => navigate('/pricing')}>
                    Upgrade to Premium
                </button>
            </div>
        );
    }

    return (
        <div className="ai-page">
            <h1>Welcome to the AI Page</h1>
            <p>Here you can access premium AI-driven content and features!</p>
            {/* Add premium content or features here */}
        </div>
    );
};

export default AiPage;
