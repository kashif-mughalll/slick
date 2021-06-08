import React from 'react'
import Product from '../Product/Product'
import Watch from '../../Assets/watch.jpg'

var ProductManager = (props)=> {
    return (
        <div>
    
            <Product productImage={Watch} category="Casual" productName="Black shirt" amount="2285" />
            <Product productImage={Watch} category="Casual" productName="Black shirt" amount="2285" />
            <Product productImage={Watch} category="Casual" productName="Black shirt" amount="2285" />

            <Product productImage={Watch} category="Casual" productName="Black shirt" amount="2285" />
            <Product productImage={Watch} category="Casual" productName="Black shirt" amount="2285" />
            <Product productImage={Watch} category="Casual" productName="Black shirt" amount="2285" />

        </div>
    )
}

export default ProductManager
