import {auth,googleAuthProvider,} from "./../../Firebase/Firebase";


export var googleSignin = () => async (dispatch) => {
  try {
    var user = await auth.signInWithPopup(googleAuthProvider);;
    var uid = user.user.uid;
    localStorage.setItem('uid',uid);
    dispatch({
      type: "SET_USER",
      payload : uid
    })      
  } catch (error) {
    console.log(error);
  }
};


export var LogOut = () => async (dispatch) => {
  try {    
    await auth.signOut();
    dispatch({
      type: "REMOVE_USER",
      payload : null
    })      
  } catch (error) {
    console.log(error);
  }
};

export var SetUser = (id) => async (dispatch) => {
  try {    
    dispatch({
      type: "SET_USER",
      payload : id
    })      
  } catch (error) {
    console.log(error);
  }
};


