import React from 'react'
import { withRouter } from 'react-router'
import Manager from '../../Components/Manager/Manager'
import './ManagementPage.css'

function ManagementPage() {
    return (
        <div className="management-page">
            <div className="management-page-top">
                <h4 className="home-page-large-heading">Management</h4>
            </div>
            <Manager/>
        </div>
    )
}

export default withRouter(ManagementPage)
