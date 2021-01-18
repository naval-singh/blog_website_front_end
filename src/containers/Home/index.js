import postBlog from '../../data.json';
import RecentPosts from './RecentPosts';
import React, { useEffect } from 'react';
import ImageGallary from './ImageGallary';
import Layout from '../../components/Layout';
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
    const slugs = postBlog.data.map(post => post.slug);
    const categories = postBlog.data.map(post => post.blogCategory);

    const gallary = <ImageGallary
        largeWidth={'71%'}
        smallWidth={'29%'}
        gallaryHeight={gallaryHeight}
        sideImageHeight={sideImageHeight}
        images={images}
        titles={titles}
        slugs={slugs}
        categories={categories}
    />

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Layout gallary={gallary} sidebar>
                <RecentPosts />
            </Layout>
        </div>
    )
}

export default Home;