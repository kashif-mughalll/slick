export var ShowModal = (Component,product = null) => (dispatch) => {   
    dispatch({
        type: 'SHOW_MODAL',
        payload : {
            active : true,
            component : Component,
            product : product
        }
    });
};


export var HideModal = () => (dispatch) => {   
    dispatch({
        type: 'HIDE_MODAL',
        payload : {
            active : false,
            component : null,
            product : null
        }
    });
};