import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { connect } from "react-redux";

var slider = ({banners})=> {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <div className="slider-box" >
            <Slider {...settings}>
                {banners.map(link => (<div key={link.link + Math.random(4)} className="slider-image-wrapper"> 
                    <img key={link.link + Math.random(4)} className="slider-image-clas" src={link.link}/> </div>))}
            </Slider>
        </div>
    )
}

var mapState = state => ({ banners : state.banners });


export default connect(mapState)(slider)







