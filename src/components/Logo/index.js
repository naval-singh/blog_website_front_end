import React from 'react';
import './style.css';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
    return (
        <div className='logo'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
        </div>
    )
}

export default Logo;