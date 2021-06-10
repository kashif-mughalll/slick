import React from 'react'
import { connect } from 'react-redux'
import ModalForm from '../../Components/ModelForm/ModelForm'
import {AddBanner} from '../../Redux/Banners/BannersActions'
import {HideModal} from '../../Redux/Modal/ModalActions'

var AddBannerModal = ({AddBanner,HideModal})=> {

    var saveBtnHandler = async (Obj)=> {
        await AddBanner(Obj);
        HideModal();
    }

    return (
        <div>
            <ModalForm saveBtnHandler={saveBtnHandler} />
        </div>
    )
}

var actions = {
    HideModal,
    AddBanner
}

export default connect(null,actions)(AddBannerModal)
