import React from 'react'
import './NotificationBtn.css'
import Bell from '../../Assets/icons/NotificationBell.svg'

var NotificationBtn = ()=> {
    return (
        <div className="notification-btn flex">
            <img className="notification-bell" src={Bell} alt="" />
        </div>
    )
}

export default NotificationBtn
