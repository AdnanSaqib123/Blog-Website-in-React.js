import React from 'react'
import './UserProfile.css'

const UserProfile = ({ name, age, email, designation }) => {
    return (
        <>
            <div className="bgnav"></div>
            <div id='user-profile' className='user-profile'>
                <h1>Profile</h1><br />
                <p><b>Name:</b> {name}</p>
                <p><b>Age:</b> {age}</p>
                <p><b>E-Mail:</b> {email}</p>
                <p><b>Designation:</b> {designation}</p>
            </div>
        </>
    )
}

export default UserProfile
