import {CART_ADD_ITEM, CART_REDUCE_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants';

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;

            const existItem = state.cartItems.find (x => x.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => {
                        if(x.product === existItem.product){
                            x.qty ++;
                            return x;
                        }
                        return x;
                    })
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REDUCE_ITEM:
            const item_reduce = action.payload;

            const existItem_reduce = state.cartItems.find (x => x.product === item_reduce.product);

            if (existItem_reduce) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => {
                        if(x.product === existItem_reduce.product && x.qty>1){
                            x.qty --;
                        }
                        return x;
                    })
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item_reduce]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item=>item.product!==action.payload )
            }
        default:
            return state
    }
}