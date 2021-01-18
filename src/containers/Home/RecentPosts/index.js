import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card';
import blogPost from '../../../data.json';
import './style.css';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {

    return (
        <div style={{ width: '70%' }}>
            {blogPost.data.map(post => {
                return (
                    <Card style={{ marginBottom: 27 }}>
                        <div className='postImageWrapper'>
                            <img src={require(`../../../assets/post images/${post.blogImage}`).default} alt='' />
                        </div>
                        <div className='postContentWrapper'>
                            <span>{post.blogCategory}</span>
                            <h2>{post.blogTitle}</h2>
                            <h5 className='postedBy'>posted on {post.postedOn} by {post.author}</h5>
                            <p>{post.blogText.slice(0, 250)}...</p>
                            <Link style={{ textDecoration: 'none' }} to={`/post/${post.slug}`}>read more</Link>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default RecentPosts;