import React from 'react';
import Logo from '../Logo';
import Card from '../UI/Card';
import Navbar from '../Navbar';
import './style.css';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
    return (
        <Card>
            <div className='logo'>
                <Logo />
            </div>
            <Navbar />
        </Card>
    )
}

export default Hero;