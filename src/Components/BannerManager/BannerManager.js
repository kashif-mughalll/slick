import React from 'react'
import Banner from '../Banner/Banner'
import image from '../../Assets/11.jpg'
import './BannerManager.css'

function BannerManager() {
    return (
        <div className="banners-container">
            <Banner bannerImage={image} link="blabla"/>
            <Banner bannerImage={image} link="blabla"/>
            <Banner bannerImage={image} link="blabla"/>
            <Banner bannerImage={image} link="blabla"/>
            <Banner bannerImage={image} link="blabla"/>
            <Banner bannerImage={image} link="blabla"/>
            <Banner bannerImage={image} link="blabla"/>
        </div>
    )
}

export default BannerManager
