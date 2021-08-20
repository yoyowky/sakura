import { PRODCT_DETAILS_FAIL, PRODCT_DETAILS_REQUEST, PRODCT_DETAILS_SUCCESS, PRODCT_LIST_FAIL, PRODCT_LIST_REQUEST, PRODCT_LIST_SUCCESS } from "../constants/productConstants";
import Axios from 'axios';

// action function return async function
export const listProducts = () => async(dispatch) => {
    dispatch({
        type: PRODCT_LIST_REQUEST
    })
    try{
        const {data} = await Axios.get('/api/products');
        dispatch({
            type: PRODCT_LIST_SUCCESS, // action.type
            payload: data // action.payload
        })
    } catch(error){
        dispatch({
            type: PRODCT_LIST_FAIL,
            payload: error.message
        })
    }
}

export const detailsProduct = (id) => async(dispatch) => {
    dispatch({
        type: PRODCT_DETAILS_REQUEST
    })
    try{
        const {data} = await Axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: PRODCT_DETAILS_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message

        })
    }
}