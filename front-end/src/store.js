import {createStore, combineReducers, applyMiddleware,} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { searchProductsReducer} from "./reducers/productReducers";
import {userLoginReducer, userRegisterReducer} from "./reducers/userReducers";


const reducer = combineReducers({
    user: userLoginReducer,
    userRegister: userRegisterReducer,
    searchProducts: searchProductsReducer
});

const userFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):{};

const initialState = {
    productList: [],
    user:{
        userInfo: userFromStorage,
        loading: false
    },
    searchProducts:{
        loading: false,
        products:[]
    }
}

const middlewares = [
    thunk
]
const store = createStore(reducer,
    initialState, composeWithDevTools(applyMiddleware(
        ...middlewares
    )));

export default store;
