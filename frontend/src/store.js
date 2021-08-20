// import data from './data.js';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'; 
import thunk from 'redux-thunk';
import { 
    productDetailsReducer,
    productListReducer 
} from './reducers/productReducers.js';


// to create redux store, need: initial state + reducer
const initialState = {};
// reducer: 2 parameters: state + action => return new state
// const reducer = (state, action) => {
//     return {products: data.products}
// }
// combine reducer
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;