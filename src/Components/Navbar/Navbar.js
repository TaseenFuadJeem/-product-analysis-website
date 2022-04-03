import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import SonyLogo from '../../Assets/sony-logo.png';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between my-10'>
            <div>
                <img className='w-40' src={SonyLogo} alt="" />
            </div>
            <nav className=''>
                <NavLink className='mx-5 font-bold' to="/home">HOME</NavLink>
                <NavLink className='mx-5 font-bold' to="/reviews">REVIEWS</NavLink>
                <NavLink className='mx-5 font-bold' to="/dashboard">DASHBOARD</NavLink>
                <NavLink className='mx-5 font-bold' to="/blogs">BLOGS</NavLink>
                <NavLink className='mx-5 font-bold' to="/about">ABOUT</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;