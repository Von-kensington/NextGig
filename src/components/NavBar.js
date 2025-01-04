import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    NextGig
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/jobs" className="nav-links" onClick={() => setIsMenuOpen(false)}>
                            Jobs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/community" className="nav-links" onClick={() => setIsMenuOpen(false)}>
                            Community
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links nav-login" onClick={() => setIsMenuOpen(false)}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links nav-signup" onClick={() => setIsMenuOpen(false)}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
