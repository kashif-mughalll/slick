import React from 'react'
import Product from '../Product/Product'
import { connect } from 'react-redux'

var ProductManager = ({products})=> {
    return (
        <div>    
            {
                products.map(element => (
                    <Product key={element._id} _id={element._id} productImage={element.image} category={element.category.name} 
                        productName={element.name} amount={element.price} categoryID={element.category._id} />
                ))
            }
        </div>
    )
}

var mapState = (state)=> {
    return{
        products : state.products
    }
}

export default connect(mapState)(ProductManager)
