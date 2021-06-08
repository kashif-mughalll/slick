import React from 'react'
import SideBarBtn from '../SideBarBtn/SideBarBtn'
import Home from '../../Assets/SideBarIcons/home.svg'
import Management from '../../Assets/SideBarIcons/settings.svg'
import Analytics from '../../Assets/SideBarIcons/analytics.svg'
import Products from '../../Assets/SideBarIcons/Products.svg'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/icons/SlickLogo.PNG'

var SideBar = (props) => {    

    return(
        <div className="side-bar" >
            <div className="flex">                
                <img className="main-logo" src={Logo}/> 
                <h4 className="main-heading-style">Slick</h4>
            </div>

            <div className="btns-container">
                <Link to="/"> <SideBarBtn title="Home" image={Home} /> </Link>
                <SideBarBtn title="Analytics" image={Analytics} />
                <SideBarBtn title="Products" image={Products} />
                <Link to="/management/managebanners"> <SideBarBtn title="Management" image={Management} /> </Link>
            </div>

            <div className="flex">
                <div className="side-bar-bottom-box">

                </div>
            </div>
        </div>
    )
}

export default SideBar
