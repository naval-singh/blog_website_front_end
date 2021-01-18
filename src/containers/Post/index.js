import React from 'react';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';
import './style.css';

/**
* @author
* @function Posts
**/

const Posts = (props) => {
    return (
        <Layout sidebar>
            <BlogPost {...props} />
        </Layout>
    )
}

export default Posts;