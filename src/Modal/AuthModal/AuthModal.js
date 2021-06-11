import React from 'react'
import './AuthModal.css'
import google from '../../Assets/google.PNG'
import { connect } from 'react-redux'
import {HideModal} from '../../Redux/Modal/ModalActions'
import { googleSignin } from '../../Redux/Auth/authActions'
import {SetProducts} from '../../Redux/Products/ProductsActions'
import {SetBanners} from '../../Redux/Banners/BannersActions'

var AuthModal = ({googleSignin,HideModal,SetProducts,SetBanners})=> {
    return (
        <div className="auth-modal">
            <img className="auth-modal-image" src={google} />
            <div className="flex4">
                <p className="auth-para">Try login with your Google account</p>
                <button className="auth-login-btn" onClick={
                    async ()=> {
                        await googleSignin();
                        await SetProducts();
                        await SetBanners();
                        HideModal();
                    }
                }                
                >Login With Google +</button>
            </div>
        </div>
    )
}

var actions = {
    googleSignin,
    HideModal,
    SetProducts,
    SetBanners
}

export default connect(null,actions)(AuthModal)
