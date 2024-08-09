import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="footer-container">
                    <div className="sec aboutus animate__animated wow animate__slideInLeft">
                        <h2>Blogger</h2>
                        <p>Discover how to integrate APIs into your application.</p>
                    </div>
                    <div className="sec quicklinks animate__animated wow animate__slideInUp">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a><Link to="/" className=" nav-link">Home</Link></a></li>
                            <li><a><Link to="/about" className="nav-link">About</Link></a></li>
                            <li><a><Link to="/posts" className=" nav-link">Posts</Link></a></li>
                        </ul>



                    </div>
                    <div className="sec contactBx animate__animated wow animate__slideInRight">
                        <h2>Social Links</h2>
                        <ul className="info">
                            <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                            <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                            <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerline animate__animated wow animate__slideInUp">
                    <hr /><br />
                    Copyright &copy; www.blogger.com. ALL rights reserved!
                </div>
            </div>
        </footer>
    )
}

export default Footer
