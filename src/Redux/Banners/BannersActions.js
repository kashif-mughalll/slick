import axios from 'axios'

export var AddBanner = (banner) => async (dispatch,getState) => {
    var auth = getState().Auth;
    try
    {
        if(auth) banner.user = auth;
        let response = await axios.post('https://internship-slick-api.herokuapp.com/api/banners', banner);
        console.log("Banner created on server successfully",response.status);
        let newState = [...getState().banners];
        newState.push(response.data.data);          
        dispatch({
            type: 'ADD_BANNER',
            payload : newState
        });
    }
    catch(error){ console.error(error) }    
};



export var EditBanner = (_banner) => async (dispatch,getState) => {
    try
    {
        let response = await axios.put('https://internship-slick-api.herokuapp.com/api/banners/' 
                + _banner._id, {link : _banner.link} );
        
        console.log("Banner updated on server successfully", response.status);
        
        let newState = [];
        [...getState().banners].forEach(banner => {
            if(banner._id === _banner._id) newState.push(_banner);
            else newState.push(banner);
        });
        dispatch({
            type: 'EDIT_BANNER',
            payload : newState
        });
    }
    catch(error){ console.error(error) }    
};

export var RemoveBanner = (_id) => async (dispatch,getState) => {
    try
    {
        let response = await axios.delete('https://internship-slick-api.herokuapp.com/api/banners?id=' + _id);
        console.log("Banner removed on server successfully " + _id, response.status);        
        let newState = [];
        [...getState().banners].forEach(banner => {
            if(banner._id !== _id) newState.push(banner);
        });
        dispatch({
            type: 'EDIT_BANNER',
            payload : newState
        });
    }
    catch(error){ console.error(error) }    
};


export var SetBanners = () => async (dispatch,getState) => {
    
    var auth = getState().Auth;
    var response;
    try
    {
        if(auth) response = await axios.get('https://internship-slick-api.herokuapp.com/api/banners?user='+auth);
        else response = await axios.get('https://internship-slick-api.herokuapp.com/api/banners');
        console.log("Fetching all banners from server ",response.status)             
        dispatch({
            type: 'SET_BANNERS',
            payload : response.data.data
        });        
    }
    catch(error){ console.error(error) }    
};