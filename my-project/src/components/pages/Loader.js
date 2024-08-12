// Loader.js
import React from 'react';
import './Loader.css'; // Import the CSS for styling

const Loader = ({ containerClassName }) => {
    return (
        <div className={`loader-container ${containerClassName}`}>
            <div className="loader"></div>
            <p className='loader-text'>Loading...</p>
        </div>
    );
};

export default Loader;
