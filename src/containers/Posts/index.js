import React from 'react';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';
import './style.css';

/**
* @author
* @function Posts
**/

const Posts = (props) => {
    return (
        <section className='container'>
            <BlogPost {...props} />
            <Sidebar />
        </section>
    )
}

export default Posts