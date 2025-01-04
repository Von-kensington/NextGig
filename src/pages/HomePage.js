import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css"

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to NextGig</h1>
                    <p>Your gateway to better tech job opportunities and vibrant communities.</p>
                    <div className="hero-buttons">
                        <button onClick={() => navigate('/jobs')} className="btn-primary">
                            Browse Jobs
                        </button>
                        <button onClick={() => navigate('/community')} className="btn-secondary">
                            Join Communities
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose NextGig?</h2>
                <div className="feature-cards">
                    <div className="card">
                        <h3>Tailored Job Matches</h3>
                        <p>Get personalized job recommendations based on your skills.</p>
                    </div>
                    <div className="card">
                        <h3>Active Communities</h3>
                        <p>Join discussions and network with industry professionals.</p>
                    </div>
                    <div className="card">
                        <h3>Secure Platform</h3>
                        <p>Your data is safe with our advanced security measures.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-cards">
                    <div className="card">
                        <p>"NextGig helped me land my dream job!"</p>
                        <span>- Alex, Frontend Developer</span>
                    </div>
                    <div className="card">
                        <p>"The communities are great for networking and advice."</p>
                        <span>- Jamie, Backend Engineer</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
