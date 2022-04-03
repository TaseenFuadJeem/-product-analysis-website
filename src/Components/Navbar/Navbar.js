import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='text-center my-10'>
            <NavLink className='mx-5 font-bold' to="/home">HOME</NavLink>
            <NavLink className='mx-5 font-bold' to="/reviews">REVIEWS</NavLink>
            <NavLink className='mx-5 font-bold' to="/dashboard">DASHBOARD</NavLink>
            <NavLink className='mx-5 font-bold' to="/blogs">BLOGS</NavLink>
            <NavLink className='mx-5 font-bold' to="/about">ABOUT</NavLink>
        </nav>
    );
};

export default Navbar;