import { ProductList } from "../actions"

export default (state = [],action) => {
    switch(action.type) {
    /*    case 'PRODUCT_LIST':
             return action.payload;*/
    /*   case "ADD_PRODUCT":
    
       return {
         ...state,
         Productsssssss: [...state.productasds, action.payload]
        
        }  */  
        
        default:
            return state
    }
}