import
{
    USER_SET_SHIPPING_USER_INFO,
    USER_SELECT_SHIPPING_VOUCHER,
    USER_SELECT_INVOICE_VOUCHER,
    USER_PROCEED_CHECKOUT_REQUEST,
    USER_PROCEED_CHECKOUT_SUCCESS,
    USER_PROCEED_CHECKOUT_FAIL, USER_SET_USER_INFO
} from '../constants/checkoutConstants'

export const userCheckoutReducer = (state = {
    userInfo: {},
    shippingVoucher: {},
    invoiceVoucher: {},
    loading: false
}, action) => {
    switch (action.type) {
        case USER_SET_SHIPPING_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case USER_SELECT_SHIPPING_VOUCHER:
            return {
                ...state,
                shippingVoucher: action.payload
            }
        case USER_SELECT_INVOICE_VOUCHER:
            return {
                ...state,
                invoiceVoucher: action.payload
            }
        case USER_PROCEED_CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_PROCEED_CHECKOUT_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case USER_PROCEED_CHECKOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}