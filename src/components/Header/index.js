import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaFlickr,
    FaTwitter,
    FaWhatsapp,
    FaInstagram,
    FaPinterest,
    FaFacebookF,
    FaLinkedinIn
} from "react-icons/fa";
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <header className='header'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            </ul>
            <div className='socialLinks'>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaPinterest /></a>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaTwitter /></a>
                <a href='#'><FaWhatsapp /></a>
                <a href='#'><FaLinkedinIn /></a>
                <a href='#'><FaFlickr /></a>
            </div>
        </header>
    )
}

export default Header