import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import Error from '../../Pages/Error'
import ManagementPage from '../../Pages/ManagementPage/ManagementPage'

var Container2 = ()=> {
    return (
        <div className="container2" onClick={()=>  document.getElementById("side-bar-id1").style.left = '-29rem' }>
            <Switch>
                <Route exact path="/slick" component={HomePage} />
                <Route path="/slick/management" component={ManagementPage} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default Container2
