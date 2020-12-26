import {SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS} from "../constants/productConstants";

export const searchProductsReducer = (state = {products: [], loading: false}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case SEARCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case SEARCH_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
