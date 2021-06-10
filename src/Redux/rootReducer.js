import { combineReducers } from "redux";
import ProductsReducer from "./Products/ProductsReducer";
import ModalReducer from './Modal/ModalReducer'

var rootReducer = combineReducers({
  products : ProductsReducer,
  modal : ModalReducer,
});

export default rootReducer
