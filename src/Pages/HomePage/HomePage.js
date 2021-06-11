import './HomePage.css'
import React from 'react'
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer'
import NotificationBtn from '../../Components/NotificationBtn/NotificationBtn'
import Slider from '../../Components/Slider/Slider'

var HomePage = ()=> {
    return (
        <div className="home-page">
            <div className="home-page-top">
                <div>
                    <p className="home-page-small-heading">Hey Awesome.</p>
                    <p className="home-page-large-heading">Welcome Back...</p>
                </div>
                <NotificationBtn/>
            </div>

            {/* <div className="carousel">
                
            </div> */}
            <Slider/>

            <h3 className="home-page-medium-heading add-margin">Listed Products</h3>
            <ProductsContainer/>
        </div>
    )
}

export default HomePage
