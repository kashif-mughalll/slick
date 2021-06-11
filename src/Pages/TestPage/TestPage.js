import React from 'react'
import { connect } from 'react-redux'
import './Test.css'
import {AddProduct,RemoveProduct,SetProducts,EditProduct} from '../../Redux/Products/ProductsActions'
import {ShowModal} from '../../Redux/Modal/ModalActions'
import ProductModal from './../../Modal/ProductModal/ProductModal'
import ProductForm from '../../Components/ProductForm/ProductForm'
import Delete from '../../Modal/DeleteProductModal/DeleteProductModal'
import ModelForm from '../../Components/ModelForm/ModelForm'
import AuthModal from '../../Modal/AuthModal/AuthModal'


var TestPage = ({ShowModal,SetProducts})=> {
    console.log("Test page rendered");

    return (
        <div className="">

            <AuthModal/>
        </div>
    )
}

var actions = {
    ShowModal,
    SetProducts
}

export default connect(null,actions)(TestPage)