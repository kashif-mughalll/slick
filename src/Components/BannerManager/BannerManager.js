import React from 'react'
import Banner from '../Banner/Banner'
import { connect } from 'react-redux'

var BannerManager = ({banners})=> {
    return (
        <div>            
            {
                banners.map(banner => (
                    <Banner key={banner._id} link={banner.link} _id={banner._id} />
                ))
            }
        </div>
    )
}

var mapState = state => ({banners : state.banners})

export default connect(mapState)(BannerManager)
