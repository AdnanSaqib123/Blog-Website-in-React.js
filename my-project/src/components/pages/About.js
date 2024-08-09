import React from 'react';
import './About.css';
import image from '../images/img1.jpg'; // Corrected import path

const About = () => {
    return (
        <>
            <div className="bgnav"></div>
            <section>
                <h2 className='titlea'>About Us:</h2>
                <div className="contentBx">
                    <div>
                        <h3>What is an API?</h3>
                        <p>
                            An API, or application programming interface, is a set of rules or protocols that enables software
                            applications to communicate with each other to exchange data, features, and functionality.
                        </p>
                        <br />
                    </div>
                    <div>
                        <h3>Components:</h3>
                        <ul>
                            <li><b>Endpoints:</b> Specific URLs where requests can be sent.</li>
                            <li><b>Methods:</b> HTTP methods like GET, POST, PUT, DELETE that define the type of action to be performed.</li>
                            <li><b>Requests and Responses:</b> Data sent to and received from the API. Requests include parameters or payloads, and responses return data.</li>
                        </ul>
                        <br />
                    </div>
                    <h3>Random Image API</h3>
                    <p>
                        The Random Image API generates random images for all your placeholder and design needs. It supports
                        custom sizes as well as custom image categories.
                    </p>
                    <br />
                    <h3>Endpoint</h3>
                    <p>
                        <a href="https://api-ninjas.com/api/randomimage" target="_blank" rel="noopener noreferrer">
                            https://api-ninjas.com/api/randomimage
                        </a>
                    </p>
                    <br />
                    <h3>JSONPlaceholder API:</h3>
                    <p>
                        Free fake and reliable API for testing and prototyping.
                    </p>
                    <br />
                    <h3>Endpoint</h3>
                    <p>
                        <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noopener noreferrer">
                            https://jsonplaceholder.typicode.com
                        </a>
                    </p>
                    <br />
                    <h3>Resources:</h3>
                    <p>
                        JSONPlaceholder comes with a set of 6 common resources:
                        <br /><br />
                        <span>1. <a href="https://jsonplaceholder.typicode.com/posts" target="_blank" rel="noopener noreferrer">/posts</a> &nbsp; 100 posts</span>
                        <br />
                        <span>2. <a href="https://jsonplaceholder.typicode.com/comments" target="_blank" rel="noopener noreferrer">/comments</a> &nbsp; 500 comments</span>
                        <br />
                        <span>3. <a href="https://jsonplaceholder.typicode.com/albums" target="_blank" rel="noopener noreferrer">/albums</a> &nbsp; 100 albums</span>
                        <br />
                        <span>4. <a href="https://jsonplaceholder.typicode.com/photos" target="_blank" rel="noopener noreferrer">/photos</a> &nbsp; 5000 photos</span>
                        <br />
                        <span>5. <a href="https://jsonplaceholder.typicode.com/todos" target="_blank" rel="noopener noreferrer">/todos</a> &nbsp; 200 todos</span>
                        <br />
                        <span>6. <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noopener noreferrer">/users</a> &nbsp; 10 users</span>
                    </p>
                    <br />
                    <h3>Note:</h3>
                    <p>
                        Resources have relations. For example: users have many todos, posts, albums. Posts have many comments.
                        Albums have many photos.
                    </p>
                </div>
                <div className="imgBx">
                    <img src={image} alt="Img about API Relations" className="fitBg" />
                </div>
            </section>
        </>
    );
}

export default About;
