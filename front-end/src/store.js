import {createStore, combineReducers, applyMiddleware,} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {productDetailReducer, productListReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import {userLoginReducer} from "./reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    detailProduct: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});

const localStorageCartItems = localStorage.getItem("cartItems");
const cartItemsForStorage = localStorageCartItems? JSON.parse(localStorageCartItems) : [];

const localStorageUserInfo = localStorage.getItem("userInfo");
const userInfoForStorage = localStorageCartItems? JSON.parse(localStorageUserInfo) : null;

const initialState = {
    cart:{
        cartItems: cartItemsForStorage
    },
    userLogin: {userInfo: userInfoForStorage}
}

const middlewares = [
    thunk
]
const store = createStore(reducer,
    initialState, composeWithDevTools(applyMiddleware(
        ...middlewares
    )));

export default store;
