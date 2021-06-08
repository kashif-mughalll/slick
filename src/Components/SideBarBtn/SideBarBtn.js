import React from 'react'

var SideBarBtn = ({title,image}) => {
    return (
        <div className="side-bar-btn-style flex">
            <img className="side-bar-img-style" src={image} alt="" />
            <p className="side-bar-btn-style-p"> {title} </p>
        </div>
    )
}

export default SideBarBtn
