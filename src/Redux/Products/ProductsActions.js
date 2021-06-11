import axios from 'axios';


export var AddProduct = (product) => async (dispatch,getState) => {
    var auth = getState().Auth;
    try
    {
        if(auth){
            product.user = auth;
        }
        let response = await axios.post('https://internship-slick-api.herokuapp.com/api/products', product)
        let newState = [...getState().products];
        newState.push(response.data.data);   
        console.log("Post product request done successfully ",response.status)        
        dispatch({
            type: 'ADD_PRODUCT',
            payload : newState
        });
        
    }
    catch(error){ console.error(error) }    
};


export var RemoveProduct = (_id) => async (dispatch,getState) => {

    try{
        let response = await axios.delete('https://internship-slick-api.herokuapp.com/api/products?id=' + _id);
        console.log("Successfull delete request " + _id, response.status);

        let newState = [];    
        [...getState().products].forEach(product => {
            if(product._id !== _id) newState.push(product);
        });
    
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload : newState
        });

    }catch (error) { console.error(error) }
};


export var SetProducts = () => async (dispatch,getState) => {
    var auth = getState().Auth;
    var products;
    try {
        console.log("Fetch all products from server")
        if (auth) products = await axios.get("https://internship-slick-api.herokuapp.com/api/products?user="+auth)
        else products = await axios.get("https://internship-slick-api.herokuapp.com/api/products")
        dispatch({
            type: 'SET_PRODUCTS',
            payload : products.data.data
        });

    }catch(error){
        console.error(error)
    }
};


export var EditProduct = (product) => async (dispatch,getState) => {
    let AlteredProduct = {
        name : product.name,
        category : product.category,
        price : product.price,
        image : product.image
    }

    try
    {
        let response = await axios.put('https://internship-slick-api.herokuapp.com/api/products/' + product._id, AlteredProduct)
        let Product = response.data.data;
        let newState = [];    
        console.log("Successfull put request on server ", response.status);

        [...getState().products].forEach(product => {
            if(product._id === Product._id) newState.push(Product);
            else newState.push(product);
        });

        dispatch({
            type: 'EDIT_PRODUCT',
            payload : newState
        });
    }
    catch(error){ console.error(error) }    
};