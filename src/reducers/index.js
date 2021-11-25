import { combineReducers } from 'redux';
import ProductListReducer from './product_list_reducer';


export default combineReducers({
    productList:ProductListReducer,
 
})