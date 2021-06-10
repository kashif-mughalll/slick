import React from 'react'
import ProductForm from '../../Components/ProductForm/ProductForm'
import { connect } from 'react-redux'
import {EditProduct} from '../../Redux/Products/ProductsActions'
import {HideModal} from '../../Redux/Modal/ModalActions'

var EditProductModal = ({EditProduct,HideModal,product})=> {

    let func1 = async (product) => {
        await EditProduct(product);
        HideModal();
    }

    return <ProductForm update={true} imageURL={product.image} category={product.categoryID} price={product.price} 
                productName={product.name} _id={product._id} saveBtnHandler={func1} />
}

var actions = {
    EditProduct,
    HideModal
}

var mapState = state =>({ product : state.modal.product })

export default connect(mapState,actions)(EditProductModal)
