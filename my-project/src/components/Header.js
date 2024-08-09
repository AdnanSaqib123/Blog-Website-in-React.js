import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };
    return (
        <header className='animate__animated wow animate__zoomIn' >
            <nav>
                <a href="#" className="logo">Blogger</a>
                <button className="mode-btn" onClick={toggleDarkMode}>
                    <i className="bx bx-brightness-half"></i>
                </button>

                <div id="searching-bar" className="search-bar">
                    <input type="text" className="search-input" placeholder="Search here..." />
                    <button className="search-button">
                        <i className="bx bx-search"></i>
                    </button>
                    <div className="nav-items">
                        <Link to="/" className=" nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/posts" className=" nav-link">Posts</Link>
                        <Link to="/contact" className=" nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
