import React from 'react'
import Coin from '../../Assets/icons/Coin.svg'

var ProductCard = ({productImage,amount,category,productName,id,categoryID})=> {
    return (
        <div className="product-card">
            <div className="product-card-img-cont">
                <img className="product-card-image" src={productImage} alt=""/>
                <div className="price-tag flex">
                    <img className="product-coin" src={Coin} alt=""/>
                    <p className="product-amount"> {amount} </p>
                </div>
            </div>
            <div className="margin-wrapper-4">
                <p className="product-type"> {category} </p>
                <p className="product-detail"> {productName} </p>
            </div>
        </div>
    )
}

export default ProductCard
