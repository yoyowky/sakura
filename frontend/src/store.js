// import data from './data.js';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'; 
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers.js';
import { 
    productDetailsReducer,
    productListReducer 
} from './reducers/productReducers.js';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers.js';


// to create redux store, need: initial state + reducer
const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []
    },
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null
    }
};
// reducer: 2 parameters: state + action => return new state
// const reducer = (state, action) => {
//     return {products: data.products}
// }
// combine reducer
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;