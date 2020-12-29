import
{
    USER_SET_SHIPPING_USER_INFO,
    USER_SELECT_INVOICE_VOUCHER,
    USER_PROCEED_CHECKOUT_REQUEST,
    USER_PROCEED_CHECKOUT_SUCCESS,
    USER_PROCEED_CHECKOUT_FAIL,
    USER_SELECT_SHIPPING_VOUCHER_REQUEST,
    USER_SET_TYPE_PAY, USER_SET_TOTAL_PRICE
} from '../constants/checkoutConstants'


export const userCheckoutReducer = (state = {
    userInfo: {},
    typePay: {},
    shippingVoucher: {},
    invoiceVoucher: {},
    loading: false,
    totalPrice: 0
}, action) => {


    switch (action.type) {
        case USER_SET_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.payload,
            }
        }

        case USER_SET_TYPE_PAY:
            return {
                ...state,
                typePay: action.payload
            }
        case USER_SET_SHIPPING_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case USER_SELECT_SHIPPING_VOUCHER_REQUEST: {
            const shippingVoucher = action.payload;
            return {
                ...state,
                shippingVoucher,
            }
        }
        case USER_SELECT_INVOICE_VOUCHER: {
            //SHIPP{ id, name, value, pric;
            const invoiceVoucher = action.payload;
            return {
                ...state,
                invoiceVoucher,
            }
        }

        case USER_PROCEED_CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_PROCEED_CHECKOUT_SUCCESS:
            return {
                ...state,
                shippingVoucher: {},
                invoiceVoucher: {},
                totalPrice: 0,
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