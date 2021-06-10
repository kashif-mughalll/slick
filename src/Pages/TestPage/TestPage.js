import React from 'react'
import { connect } from 'react-redux'
import './Test.css'
import {AddProduct,RemoveProduct,SetProducts,EditProduct} from '../../Redux/Products/ProductsActions'
import {ShowModal} from '../../Redux/Modal/ModalActions'
import ProductModal from './../../Modal/ProductModal/ProductModal'
import ProductForm from '../../Components/ProductForm/ProductForm'
import Delete from '../../Modal/DeleteProductModal/DeleteProductModal'


var TestPage = ({ShowModal,SetProducts})=> {
    console.log("Test page rendered");


    return (
        <div className="">

            {/* <ProductForm update={true} imageURL="url" category="60c09d4a1ea0d13bd732b73a" price="500" productName="shirt" _id="blabla123" saveBtnHandler={()=>{}}/> */}
            {/* <ProductForm saveBtnHandler={()=>{}} /> */}
            {/* <Delete/> */}
        </div>
    )
}

var actions = {
    ShowModal,
    SetProducts
}

export default connect(null,actions)(TestPage)