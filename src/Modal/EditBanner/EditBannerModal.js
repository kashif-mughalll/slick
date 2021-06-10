import React from 'react'
import { connect } from 'react-redux'
import ModelForm from '../../Components/ModelForm/ModelForm'
import { HideModal } from '../../Redux/Modal/ModalActions'
import {EditBanner} from '../../Redux/Banners/BannersActions'


function EditBannerModal({banner,HideModal,EditBanner}) {

    var saveBtnHandler = async (banner) => {
        await EditBanner(banner)
        HideModal();
    }

    return <ModelForm update={true} saveBtnHandler={saveBtnHandler} link={banner.link} _id={banner._id}/>  
}

var actions = {
    HideModal,
    EditBanner
}

var mapState = state => ({banner : state.modal.product})

export default connect(mapState,actions)(EditBannerModal)
