import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";

var rootReducer = combineReducers({
  Cart: cartReducer
});

export default rootReducer
