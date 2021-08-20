import { PRODCT_DETAILS_FAIL, PRODCT_DETAILS_REQUEST, PRODCT_DETAILS_SUCCESS, PRODCT_LIST_FAIL, PRODCT_LIST_REQUEST, PRODCT_LIST_SUCCESS } from "../constants/productConstants";

// reducer: 1st parameter: state; 2nd parameter: action
export const productListReducer = (state={loading:true, prodcuts:[]}, action)=>{
    switch(action.type){
        case PRODCT_LIST_REQUEST:
            return {loading: true};
        case PRODCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case PRODCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const productDetailsReducer = (state={loading:true, prodcut:{}}, action)=>{
    switch(action.type){
        case PRODCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case PRODCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}