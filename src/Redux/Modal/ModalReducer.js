var initialState = {};

var ModalReducer = (state = initialState, action) => {
    let {type,payload} = action

    switch (type) {
        case "SHOW_MODAL":
            return payload;
        case "HIDE_MODAL":
            return payload;
        default:
            return state;
    }
};
  

export default ModalReducer