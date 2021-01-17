import React from 'react';
import Sidebar from '../Sidebar';
import './style.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <div className='container'>
            {props.children}
            <Sidebar />
        </div>
    )
}

export default Layout;