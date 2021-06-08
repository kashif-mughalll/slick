import React from 'react'
import Banner from '../Banner/Banner'
import image from '../../Assets/11.jpg'

function BannerManager() {
    return (
        <div>
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
