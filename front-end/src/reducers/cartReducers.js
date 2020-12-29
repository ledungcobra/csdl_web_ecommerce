import {
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_REDUCE_ITEM,
    CART_REMOVE_ITEM, CART_SET_CART_ITEMS
} from '../constants/cartConstants';
import {USER_PROCEED_CHECKOUT_SUCCESS} from "../constants/checkoutConstants";

export const cartReducer = (state = {cartItems: [], totalPrice: 0}, action) => {
    switch (action.type) {

        case CART_ADD_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CART_SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }

        case CART_ADD_ITEM_SUCCESS:
            const item = action.payload;

            const existItem = state.cartItems.find(x => x.product === item.product);


            if (existItem) {
                const cartItems = state.cartItems.map(x => {
                    if (x.product === existItem.product && x.qty < existItem.remain) {
                        console.log(x.qty)
                        console.log(x.remain)
                        console.log(existItem.qty);
                        console.log(existItem.remain);
                        x.qty++;
                        return x;

                    }
                    return x;
                });

                return {
                    ...state,
                    loading: false,
                    cartItems,
                    totalPrice: cartItems.reduce((acc, item) => acc + Math.floor(+item.qty * +item.price * (100 - item.discount) / 100000) * 1000, 0)

                }
            } else {
                return {
                    ...state,
                    loading: false,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REDUCE_ITEM:
            const item_reduce = action.payload;

            const existItem_reduce = state.cartItems.find(x => x.product === item_reduce.product);

            if (existItem_reduce) {
                const cartItems = state.cartItems.map(x => {
                    if (x.product === existItem_reduce.product && x.qty > 1) {
                        x.qty--;
                    }
                    return x;
                });

                return {
                    ...state,
                    cartItems,
                    totalPrice: cartItems.reduce((acc, item) => acc + Math.floor(+item.qty * +item.price * (100 - item.discount) / 100000) * 1000, 0)
                }
            } else {
                return {
                    ...state
                }
            }
        case CART_REMOVE_ITEM:
            const cartItems = state.cartItems.filter(item => item.product !== action.payload)
            return {
                ...state,
                cartItems,
                totalPrice: cartItems.reduce((acc, item) => acc + Math.floor(+item.qty * +item.price * (100 - item.discount) / 100000) * 1000, 0)
            }

        case USER_PROCEED_CHECKOUT_SUCCESS:
            return {
                ...state,
                cartItems: [],
                totalPrice: 0
            }

        default:

            return state
    }
}