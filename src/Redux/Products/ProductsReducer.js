var initialState = [];

var ProductsReducer = (state = initialState, action) => {
    let {type,payload} = action

    switch (type) {
        case "ADD_PRODUCT":
            return payload;
        case "REMOVE_PRODUCT":
            return payload;
        case "SET_PRODUCTS":
            return payload;
        case "EDIT_PRODUCT":
            return payload;
        default:
            return state;
    }
};
  

export default ProductsReducer


