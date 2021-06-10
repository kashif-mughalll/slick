import { combineReducers } from "redux";
import ProductsReducer from "./Products/ProductsReducer";
import ModalReducer from './Modal/ModalReducer'
import BannersReducer from './Banners/BannersReducer'

var rootReducer = combineReducers({
  products : ProductsReducer,
  modal : ModalReducer,
  banners : BannersReducer
});

export default rootReducer
