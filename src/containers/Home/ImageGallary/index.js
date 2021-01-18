import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card';
import './style.css';

/**
* @author
* @function ImageGallary
**/

const PreviewImage = (props) => {
    const { height, src, alt, title, category, slug } = props;
    return (
        <>
            <div className='gallaryImageContainer' style={{ height: `${height}px` }}>
                <img src={src} alt={alt} />
                <div className='title' style={props.style}>
                    <h3 style={{ textAlign: 'center' }}>
                        <span>{category}</span>
                        <Link
                            style={{ textDecoration: 'none', color: '#fff' }}
                            to={`/post/${slug}`}
                        >{title}
                        </Link>
                    </h3>
                </div>
            </div>
        </>
    )
}
const ImageGallary = (props) => {

    const {
        gallaryHeight,
        sideImageHeight,
        largeWidth,
        smallWidth,
        images,
        titles,
        slugs,
        categories
    } = props;

    const gallaryStyle = {
        height: gallaryHeight + 'px',
        overflow: 'hidden'
    }

    const renderMainImage = () => {
        return (
            <PreviewImage
                height={gallaryHeight}
                src={require(`../../../assets/post images/${images[3]}`).default}
                alt={''}
                slug={slugs[3]}
                title={titles[3]}
                category={categories[3]}
                style={{ bottom: 30, fontSize: 24 }}
            />
        )
    }

    const renderSideImages = () => {
        let sideImages = [];
        for (let i = 0; i < 3; i++) {
            sideImages[i] = <PreviewImage
                height={sideImageHeight}
                src={require(`../../../assets/post images/${images[i]}`).default}
                alt={''}
                slug={slugs[i]}
                title={titles[i]}
                category={categories[i]}
                style={{ bottom: 15, fontSize: 15 }}
            />
        }
        return sideImages;
    }

    return (
        <Card>
            <div className='gallaryPost' style={gallaryStyle}>
                <section style={{ width: largeWidth }}>
                    {renderMainImage()}
                </section>
                <section style={{ width: smallWidth }}>
                    {renderSideImages()}
                </section>
            </div>
        </Card>
    )
}

export default ImageGallary;