import React from 'react'
import './Product.css'
import Coin from '../../Assets/icons/Coin.svg'
import EditIcon from '../../Assets/icons/Edit.svg'
import DeleteIcon from '../../Assets/icons/Delete.svg'

var Product = ({productImage,category,productName,amount})=> {
    return (
        <div className="product-container">
            <div className="product-image-container flex"> 
                <img className="product-image-style" src={productImage} alt=""/> 
            </div>
            <div></div>

            <div className="product-center-div">
                <p className="product-category-stylee"> {category} </p>
            </div>
            <div></div>

            <div className="product-center-div">
                <p className="product-category-style2"> {productName} </p>
            </div>
            <div></div>

            <div className="product-center-div">
                <div className="flex" >
                    <img src={Coin} className="coin-icon" alt=""/>
                    <p className="product-category-stylee"> {amount} </p>
                </div>
            </div>
            <div></div>

            <div className="product-center-div"> 
                <img className="product-btn-style" src={EditIcon} alt=""/> 
            </div>
            <div></div>

            <div className="product-center-div"> 
                <img className="product-btn-style" src={DeleteIcon} alt=""/> 
            </div>
        </div>
    )
}

export default Product
