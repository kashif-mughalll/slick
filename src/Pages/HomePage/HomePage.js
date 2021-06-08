import './HomePage.css'
import React from 'react'
import ProductsContainer from '../../Components/ProductsContainer/ProductsContainer'

var HomePage = ()=> {
    return (
        <div className="home-page">
            <div className="home-page-top">
                <div>
                    <p className="home-page-small-heading">Hey Awesome.</p>
                    <p className="home-page-large-heading">Welcome Back...</p>
                </div>
                <div className="flex">
                    <div className="notification-btn">

                    </div>
                </div>
            </div>

            <div className="carousel">
                
            </div>

            <h3 className="home-page-medium-heading add-margin">Listed Products</h3>
            <ProductsContainer/>
        </div>
    )
}

export default HomePage
