import { combineReducers } from "redux";
import ProductsReducer from "./Products/ProductsReducer";
import ModalReducer from './Modal/ModalReducer'
import BannersReducer from './Banners/BannersReducer'
import AuthReducer from './Auth/authReducer'

var rootReducer = combineReducers({
  products : ProductsReducer,
  modal : ModalReducer,
  banners : BannersReducer,
  Auth : AuthReducer
});

export default rootReducer
