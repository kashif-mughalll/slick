import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BannerManager from '../BannerManager/BannerManager'
import {ShowModal} from '../../Redux/Modal/ModalActions'
import AddBannerModal from '../../Modal/AddBannerModal/AddBannerModal'

var BannersContainer = ({ShowModal})=> {
    return (
        <div>
            <div className="manager-top">
                <div className="flex div32">
                    <Link to="/management/managebanners"> <button className="manager-top-btn changed-div">Manage Banners</button> </Link>
                    <Link to="/management/manageproducts"> <button className="manager-top-btn">Manage Products</button> </Link>
                    <div className="sliderr-bar"></div>
                </div>
                <button className="manager-top-add-btn" onClick={()=> ShowModal(AddBannerModal)} >+ Add New</button>
            </div>
            <div className="manager-bottom" style={{height: "calc(100vh - 26.5rem)"}}>                
                <BannerManager/>               
            </div>
        </div>
    )
}

var actions = {
    ShowModal,
}

export default connect(null,actions)(BannersContainer)
