import React from 'react'
import tutlogo from '../assests/tutlogo.png'
import profileIcon from '../assests/profileIcon.png'
import downArrowIcon from '../assests/downArrowIcon.png'

const Navbar = () => {
    return (
        <nav>
            <div className='tut_logo'>
                <img src={tutlogo} alt="not_found" />
            </div>

            <div className='nav_link'>
                <a href='/#'>My Assignment</a>
                <a href='/#'>Chat with Mentor</a>
                <a href='/#'>
                    <img className='profile_icon' src={profileIcon} alt="" />
                    ProfileName
                    <img className='down_arrow' src={downArrowIcon} alt="" />
                </a>
            </div>

        </nav>
    )
}

export default Navbar