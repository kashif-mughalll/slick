import React from 'react'
import ProductForm from '../../Components/ProductForm/ProductForm'
import { connect } from 'react-redux'
import {AddProduct} from '../../Redux/Products/ProductsActions'
import {HideModal} from '../../Redux/Modal/ModalActions'

var ProductModal = ({AddProduct,HideModal})=> {

    // adding new product
    var saveBtnHandler = async (Obj)=> {
        await AddProduct(Obj);
        HideModal();
    }
    return <ProductForm saveBtnHandler={saveBtnHandler}/>
}

var actions = {
    AddProduct,
    HideModal
}

export default connect(null,actions)(ProductModal)
