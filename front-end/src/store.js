import {createStore, combineReducers, applyMiddleware,} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {productListReducer} from "./reducers/productReducers";
import {userLoginReducer, userRegisterReducer} from "./reducers/userReducers";



const reducer = combineReducers({
    productList: productListReducer,
    user: userLoginReducer,
    userRegister: userRegisterReducer
});


const userFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):{};

const initialState = {
    productList: [],
    user:{
        userInfo: userFromStorage,
        loading: false
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
