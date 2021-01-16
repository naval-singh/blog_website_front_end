import React, { useEffect } from 'react';
import RecentPosts from './RecentPosts';
import ImageGallary from './ImageGallary';
import Sidebar from '../../components/Sidebar';
import postBlog from '../../data.json';
import './style.css';

/**
* @author
* @function Home
**/

const Home = (props) => {

    const gallaryHeight = 450;
    const sideImageHeight = gallaryHeight / 3;
    const images = postBlog.data.map(post => post.blogImage);
    const titles = postBlog.data.map(post => post.blogTitle);
    const ids = postBlog.data.map(post => post.id);
    const categories = postBlog.data.map(post => post.blogCategory);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <ImageGallary
                largeWidth={'71%'}
                smallWidth={'29%'}
                gallaryHeight={gallaryHeight}
                sideImageHeight={sideImageHeight}
                images={images}
                titles={titles}
                ids={ids}
                categories={categories}
            />
            <section className='homeContainer'>
                <RecentPosts />
                <Sidebar />
            </section>
        </div>
    )
}

export default Home;