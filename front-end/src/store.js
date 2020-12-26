import {createStore, combineReducers, applyMiddleware,} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { searchProductsReducer} from "./reducers/productReducers";
import {userLoginReducer, userRegisterReducer} from "./reducers/userReducers";
import {cartReducer} from "./reducers/cartReducers";


const reducer = combineReducers({
    user: userLoginReducer,
    userRegister: userRegisterReducer,
    searchProducts: searchProductsReducer,
    cart: cartReducer
});





const userFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):{};
const cart = localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];
const initialState = {
    productList: [],
    user:{
        userInfo: userFromStorage,
        loading: false
    },
    searchProducts:{
        loading: false,
        products:[]
    },
    cart:{
        cartItems: cart}

}

const middlewares = [
    thunk
]
const store = createStore(reducer,
    initialState, composeWithDevTools(applyMiddleware(
        ...middlewares
    )));

export default store;
