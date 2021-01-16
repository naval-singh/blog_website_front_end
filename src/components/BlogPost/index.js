import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import blogPost from '../../data.json';
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
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: '',
        blogCategory: '',
        blogTitle: '',
        slug: '',
        postedOn: '',
        author: '',
        blogImage: '',
        blogText: ''
    });
    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post => post.id === postId)
        setPost(post);
        window.scrollTo(0, 250);
    }, [post, props.match.params.postId])

    if (post.blogImage === '') return null;

    return (
        <div className='blogPostContainer'>
            <Card>
                <div className='blogHeader'>
                    <span className='postCategory'>{post.blogCategory}</span>
                    <h1 className='postTitle'>{post.blogTitle}</h1>
                    <span className='postedBy'>posted on {post.postedOn} by {post.author}</span>
                </div>
                <div className='postImageContainer'>
                    <img src={require(`../../assets/post images/${post.blogImage}`).default} alt='postImage' />
                </div>
                <div className='postContent'>
                    <h2>{post.blogTitle}</h2>
                    <p>{post.blogText}</p>
                </div>
                <div className='socialMedia'>
                    <a
                        href='https://www.facebook.com/'
                        target='_blank'
                        style={{ background: '#4867aa' }}
                    ><FaFacebookF />
                    </a>
                    <a
                        href='https://www.instagram.com/'
                        target='_blank'
                        style={{ background: '#9b6954' }}
                    ><FaInstagram />
                    </a>
                    <a
                        href='https://twitter.com/'
                        target='_blank'
                        style={{ background: '#50abf1' }}
                    ><FaTwitter />
                    </a>
                    <a
                        href='https://www.whatsapp.com/'
                        target='_blank'
                        style={{ background: '#2fe965' }}
                    ><FaWhatsapp />
                    </a>
                    <a
                        href='https://www.linkedin.com/'
                        target='_blank'
                        style={{ background: '#0077b5' }}
                    ><FaLinkedinIn />
                    </a>
                    <a
                        href='https://www.flickr.com/'
                        target='_blank'
                        style={{ background: '#f70080' }}
                    ><FaFlickr />
                    </a>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost;