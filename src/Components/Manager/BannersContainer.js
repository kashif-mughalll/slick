import React from 'react'
import { Link } from 'react-router-dom'
import BannerManager from '../BannerManager/BannerManager'

var BannersContainer = ()=> {
    return (
        <div>
            <div className="manager-top">
                <div className="flex div32">
                    <Link to="/management/managebanners"> <button className="manager-top-btn changed-div">Manage Banners</button> </Link>
                    <Link to="/management/manageproducts"> <button className="manager-top-btn">Manage Products</button> </Link>
                    <div className="sliderr-bar"></div>
                </div>
                <button className="manager-top-add-btn">+ Add New</button>
            </div>
            <div className="manager-bottom" style={{height: "calc(100vh - 26.5rem)"}}>                
                <BannerManager/>               
            </div>
        </div>
    )
}

export default BannersContainer
