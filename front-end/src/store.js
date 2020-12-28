import {createStore, combineReducers, applyMiddleware,} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {searchProductsReducer} from "./reducers/productReducers";
import {userLoginReducer, userRegisterReducer} from "./reducers/userReducers";
import {cartReducer} from "./reducers/cartReducers";
import {userCheckoutReducer} from "./reducers/checkoutReducers";


const reducer = combineReducers({
    user: userLoginReducer,
    userRegister: userRegisterReducer,
    searchProducts: searchProductsReducer,
    cart: cartReducer,
    shipping: userCheckoutReducer
});


const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {};
const cart = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const totalPrice = cart ? cart.reduce((acc, item) => acc + Math.floor(+item.qty * +item.price * (100 - item.discount) / 100000) * 1000, 0) : 0;

const initialState = {
    productList: [],
    user: {
        userInfo: userFromStorage,
        loading: false
    },
    searchProducts: {
        loading: false,
        products: []
    },
    cart: {
        cartItems: cart,
        totalPrice
    },
    shipping: {
        userInfo: {},
        shippingVoucher: {},
        invoiceVoucher: {},
        loading: false,
        actualPrice: 0
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
