import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Manager.css'
import BannerManager from '../BannerManager/BannerManager'
import ProductManager from '../ProductManager/ProductManager'

var Manager = (props)=> {

    return (
        <div className="manager">
            <div className="manager-top">
                <div className="flex">
                    <button className="manager-top-btn">Manage Banners</button>
                    <button className="manager-top-btn">Manage Products</button>
                </div>
                <button className="manager-top-add-btn">+ Add New</button>
            </div>
            <div className="manager-bottom">                
                <Switch>
                    <Route default path="/management/managebanners" component={BannerManager} />
                    <Route path="/management/manageproducts" component={ProductManager} />
                </Switch>                
            </div>
        </div>
    )
}

export default Manager
