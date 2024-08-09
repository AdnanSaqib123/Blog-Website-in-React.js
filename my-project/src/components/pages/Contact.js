import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="bgnav"></div>
            <h2 className='titleh'>Contact Us:</h2>
            <div className="container1">
                <form >
                    <label htmlFor="fname">First Name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Enter your first name.."

                    />

                    <label htmlFor="lname">Last Name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Enter your last name.."

                    />

                    <label htmlFor="email">E-Mail:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email.."

                    />

                    <label htmlFor="subject">Subject:</label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        style={{ height: '100px' }}

                    ></textarea>

                    <button className="btnsr" type="submit">Submit</button>
                    <button className="btnsr" type="button" >Reset</button>
                </form>
            </div>
        </>
    )
}

export default Contact
