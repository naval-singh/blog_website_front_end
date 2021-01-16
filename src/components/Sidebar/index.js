import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import clockImage from '../../assets/icons/clock.png';
import profileImage from '../../assets/profile/profile.png';
import blogPost from '../../data.json';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import './style.css';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data
        setPosts(posts)
    }, [posts])

    return (
        <div className='sidebarContainer'>
            <Card style={{ marginBottom: '27px', padding: '10px 0' }}>
                <span className='cardHeader'>About-us</span>
                <div className='profileImageContainer'>
                    <img src={profileImage} alt='profileImage' />
                </div>
                <div className='personalBio'>
                    <p>This is Naval Verma, I'm a software developer and have spacialization in both front-end as well as back-end development...:)</p>
                </div>
            </Card>
            <Card style={{ marginBottom: '27px', padding: '10px 0' }}>
                <span className='cardHeader'>Social Network</span>
                <div className='socialIcons'>
                    <a href='https://www.facebook.com/' target='_blank'>
                        <FaFacebookF />
                    </a>
                    <a href='https://in.pinterest.com/' target='_blank'>
                        <FaPinterest />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <FaInstagram />
                    </a>
                    <a href='https://twitter.com/' target='_blank'>
                        <FaTwitter />
                    </a>
                </div>
            </Card>
            <Card style={{ marginBottom: '27px', padding: '10px 0' }}>
                <span className='cardHeader'>Recent Post</span>
                <div className='recentPosts'>
                    {
                        posts.map(post => {
                            return (
                                <div className='recentPost' key={post.id}>
                                    <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                                        <h3>{post.blogTitle}</h3>
                                    </Link>
                                    <div className='postedOn'>
                                        <img src={clockImage} alt='clock' />
                                        <span>{post.postedOn}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Card>
        </div>
    )
}

export default Sidebar;