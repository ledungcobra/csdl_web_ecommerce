import {
    USER_PROCEED_CHECKOUT_FAIL,
    USER_PROCEED_CHECKOUT_REQUEST, USER_PROCEED_CHECKOUT_SUCCESS,
    USER_SELECT_INVOICE_VOUCHER,
    USER_SELECT_SHIPPING_VOUCHER,
    USER_SET_SHIPPING_USER_INFO, USER_SET_TYPE_PAY
} from "../constants/checkoutConstants";

import axios from 'axios';


export const setShippingVoucher = (shippingVoucher) => dispatch => {
    dispatch({
        type: USER_SELECT_SHIPPING_VOUCHER,
        payload: shippingVoucher
    })
}

export const setShippingUserInfo = (shippingInfo) => async dispatch => {

    dispatch({
        type: USER_SET_SHIPPING_USER_INFO,
        payload: shippingInfo
    })
}

export const setInvoiceVoucher = (invoiceVoucher) => dispatch => {
    dispatch({
        type: USER_SELECT_INVOICE_VOUCHER,
        payload: invoiceVoucher
    })
}

export const proceedCheckout = () => async (dispatch, getState) => {

    const {
        userInfo,
        shippingVoucher,
        invoiceVoucher
    } = getState().shipping;

    dispatch({
        type: USER_PROCEED_CHECKOUT_REQUEST,
    });

    try {
        await axios.post('/api/checkout', {
                userInfo,
                shippingVoucher,
                invoiceVoucher
            },
            {
                contentType:'application/json'
            });
        dispatch({
            type: USER_PROCEED_CHECKOUT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: USER_PROCEED_CHECKOUT_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const setUserTypePay = (typePay)=> async dispatch =>{
    dispatch({
        type:USER_SET_TYPE_PAY,
        payload:typePay
    })
}
