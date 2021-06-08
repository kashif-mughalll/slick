import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Error from '../../Pages/Error'
import ManagementPage from '../../Pages/ManagementPage/ManagementPage'

var Container2 = ()=> {
    return (
        <div className="container2">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/management" component={ManagementPage} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default Container2
