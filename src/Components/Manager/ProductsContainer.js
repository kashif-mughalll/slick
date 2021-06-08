import React from 'react'
import { Link } from 'react-router-dom'
import ProductManager from '../ProductManager/ProductManager'
import ProductHeader from '../ProductHeader/ProductHeader'

function ProductsContainer() {
    return (
        <div>            
            <div className="manager-top">
                <div className="flex div32">
                    <Link to="/management/managebanners"> <button className="manager-top-btn">Manage Banners</button> </Link>
                    <Link to="/management/manageproducts"> <button className="manager-top-btn changed-div">Manage Products</button> </Link>
                    <div className="sliderrr-bar"></div>
                </div>
                <button className="manager-top-add-btn">+ Add New</button>
            </div>
            <ProductHeader/>
            <div className="manager-bottom" style={{height: "calc(100vh - 29.5rem)"}}>                
                <ProductManager/>               
            </div>
        </div>
    )
}

export default ProductsContainer
