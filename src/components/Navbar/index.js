import React, { useState } from 'react';
import './style.css';
import icon from '../../assets/icons/search.png'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        alert('search ad')
    }
    const openSearch = () => {
        setSearch(true)
    }
    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className='navbar'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/post'>Posts</NavLink></li>
                <li><NavLink to='/features'>Features</NavLink></li>
                <li><NavLink to='/signin'>Sign In</NavLink></li>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
            </ul>
            <div className='search'>
                <form onSubmit={handleSearch}>
                    <input className={searchClass} type='text' placeholder='Search' />
                    <img onClick={openSearch} className='searchIcon' src={icon} alt='search' />
                </form>
            </div>
        </div>
    )
}

export default Navbar;