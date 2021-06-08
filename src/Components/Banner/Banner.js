import React from 'react'
import './Banner.css'
import LinkIcon from '../../Assets/icons/Link.svg'
import EditIcon from '../../Assets/icons/Edit.svg'
import DeleteIcon from '../../Assets/icons/Delete.svg'

var Banner = ({bannerImage,link})=> {
    return (
    <div className="flex">
        <div className="banner">
            <div className="banner-image-container flex">
                <img className="banner-image" src={bannerImage} alt=""/>
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
            <div className="flex"> <img className="banner-btn-style" src={EditIcon} alt=""/> </div>
            <div></div>
            <div className="flex"> <img className="banner-btn-style" src={DeleteIcon} alt=""/> </div>
        </div>
    </div>
    )
}

export default Banner
