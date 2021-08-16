import { PRODCT_LIST_FAIL, PRODCT_LIST_REQUEST, PRODCT_LIST_SUCCESS } from "../constants/productConstants";
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