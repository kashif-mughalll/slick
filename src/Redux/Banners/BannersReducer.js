var initialState = [];

var BannersReducer = (state = initialState, action) => {
    let {type,payload} = action

    switch (type) {
        case "ADD_BANNER":
            return payload;
        case "REMOVE_BANNER":
            return payload;
        case "SET_BANNERS":
            return payload;
        case "EDIT_BANNER":
            return payload;
        default:
            return state;
    }
};
  

export default BannersReducer
