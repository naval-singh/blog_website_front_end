import React from 'react';
import Hero from '../Hero';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './style.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            <Header />
            <Hero />
            { props.gallary && <div>{props.gallary}</div>}
            <div className='container'>
                {props.children}
                {props.sidebar && <Sidebar />}
            </div>
        </>

    )
}

export default Layout;