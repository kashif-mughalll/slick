import React from 'react'
import './Banner.css'
import LinkIcon from '../../Assets/icons/Link.svg'
import EditIcon from '../../Assets/icons/Edit.svg'
import DeleteIcon from '../../Assets/icons/Delete.svg'
import {ShowModal} from '../../Redux/Modal/ModalActions'
import { connect } from 'react-redux'
import EditBannerModal from '../../Modal/EditBanner/EditBannerModal'
import DeleteBannerModal from '../../Modal/DeleteBannerModal/DeleteBannerModal'

var Banner = ({_id,link,ShowModal})=> {
    return (
    <div className="flex">
        <div className="banner">
            <div className="banner-image-container flex">
                <img className="banner-image" src={link} alt=""/>
            </div>
            <div></div>
            <div className="flex divv">
                <div className="banner-link-area">
                    <div className="flex banner-div-33">
                        <img className="banner-link-icon" src={LinkIcon} alt="" />
                    </div>
                    <p className="banner-link-style"> {link} </p>
                </div>
            </div>
            <div></div>
            <div className="flex"> <img className="banner-btn-style" src={EditIcon} alt="" onClick={()=> ShowModal(EditBannerModal,{_id,link})} /> </div>
            <div></div>
            <div className="flex"> <img className="banner-btn-style" src={DeleteIcon} alt="" onClick={()=> ShowModal(DeleteBannerModal,_id) } /> </div>
        </div>
    </div>
    )
}

var actions = {
    ShowModal
}

export default connect(null,actions)(Banner)
