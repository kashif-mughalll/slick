import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductContainer.css'
import Image from '../../Assets/11.jpg'

var ProductsContainer = (props)=> {
    return (
        <div className="product-card-container">
            <ProductCard amount="121212" category="casual" title="product" image={Image} id="1212" />
            <ProductCard amount="121212" category="casual" title="product" image={Image} id="1212" />
            <ProductCard amount="121212" category="casual" title="product" image={Image} id="1212" />
            <ProductCard amount="121212" category="casual" title="product" image={Image} id="1212" />
            <ProductCard amount="121212" category="casual" title="product" image={Image} id="1212" />
            <ProductCard amount="121212" category="casual" title="product" image={Image} id="1212" />           
            
        </div>
    )
}

export default ProductsContainer
