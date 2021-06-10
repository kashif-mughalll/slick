import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductContainer.css'
import { connect } from 'react-redux'

var ProductsContainer = ({products})=> {
    return (
        <div className="product-card-container">
            {
                products.map(element => (
                    <ProductCard key={element._id} id={element._id} productImage={element.image} category={element.category.name} 
                    productName={element.name} amount={element.price} categoryID={element.category._id} />
                ))
            }
        </div>
    )
}

var mapState = (state)=> {
    return {
        products : state.products
    }
}

export default connect(mapState)(ProductsContainer)
