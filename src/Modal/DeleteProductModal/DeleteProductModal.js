import React from 'react'
import { connect } from 'react-redux'
import './DeleteProductModal.css'
import {HideModal} from '../../Redux/Modal/ModalActions'
import {RemoveProduct} from '../../Redux/Products/ProductsActions'

var DeleteProductModal = ({_id,HideModal,RemoveProduct})=> {

    let func1 = async ()=> {
        await RemoveProduct(_id);
        HideModal();
    }

    return (
        <div className="delete-modal flex1">
            <p className="delete-modal-para">Are you sure you want to delete this product?</p>
            <div>
                <button className="delete-modal-btns delete-modal-btns-2" onClick={func1} >Confirm</button>
                <button className="delete-modal-btns" onClick={HideModal} > Cancel </button>
            </div>
        </div>
    )
}

var mapState = state => ({_id : state.modal.product})

var actions = {
    HideModal,
    RemoveProduct
}

export default connect(mapState,actions)(DeleteProductModal)
