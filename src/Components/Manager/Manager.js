import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Manager.css'
import BannerView from './BannersContainer'
import ProductView from './ProductsContainer'

var Manager = (props)=> {
    return (
        <div className="manager">
            <Switch>
                <Route default path="/management/managebanners" component={BannerView} />
                <Route path="/management/manageproducts" component={ProductView} />
            </Switch>
        </div>
    )
}

export default Manager
