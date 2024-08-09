import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../images/bg1-img.jpg'),
        require('../images/bg2-img.jpg'),
        require('../images/bg3-img.jpg'),
        require('../images/bg4-img.jpg'),
        require('../images/bg5-img.jpg'),
        require('../images/bg6-img.jpg')
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    const navigate = useNavigate();

    const goToUserProfile = () => {
        navigate('/user-profile', {
            state: { name: 'MUHAMMAD ADNAN SAQIB', age: 21, email: 'adnansaqib205@gmail.com', designation: 'Intern-Software Engineer' }  // Passing props using state
        });
    };
    return (
        <section id="home" className="home">
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev animate__animated wow animate__slideInLeft" onClick={handlePrev}>
                    <span className='btn-c'>&#10094;</span>
                </button>
                <button className="carousel-control-next animate__animated wow animate__slideInRight" onClick={handleNext}>
                    <span className='btn-c'>&#10095;</span>
                </button>
            </div>
            <div className="home-text">
                <h2 className="home-title animate__animated wow animate__slideInLeft">Blogger</h2>
                <p className="home-subtitle animate__animated wow animate__slideInLeft">
                    Discover how to integrate APIs into your application.
                </p>
                <br />
                <button className="btn-home animate__animated wow animate__slideInLeft" onClick={goToUserProfile}>Go to Profile</button>
            </div>
        </section>
    );
};

export default Home;
