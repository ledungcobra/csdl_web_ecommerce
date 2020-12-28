import {
    USER_PROCEED_CHECKOUT_FAIL,
    USER_PROCEED_CHECKOUT_REQUEST, USER_PROCEED_CHECKOUT_SUCCESS,
    USER_SELECT_INVOICE_VOUCHER,
    USER_SELECT_SHIPPING_VOUCHER_REQUEST,
    USER_SET_SHIPPING_USER_INFO, USER_SET_TOTAL_PRICE, USER_SET_TYPE_PAY
} from "../constants/checkoutConstants";

import axios from 'axios';


export const setShippingVoucher = (shippingVoucher) => dispatch => {
    dispatch({
        type: USER_SELECT_SHIPPING_VOUCHER_REQUEST,
        payload: shippingVoucher
    })


}

export const setShippingUserInfo = (shippingInfo) => dispatch => {

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

export const proceedCheckout = (totalPrice) => async (dispatch, getState) => {

    const {
        shippingVoucher,
        invoiceVoucher, typePay
    } = getState().shipping;
    const deliveryID = getState().shipping.userInfo.id;
    const {cartItems} = getState().cart;
    const {userInfo} = getState().user

    dispatch({
        type: USER_PROCEED_CHECKOUT_REQUEST,
    });

    if(!typePay){
       return dispatch({
            type:USER_PROCEED_CHECKOUT_FAIL,
            payload:'Please choose payment method'
        })
    }

    try {

        await axios.post('/api/checkout', {
                totalPrice,
                shippingVoucherID: shippingVoucher && shippingVoucher.id ? shippingVoucher.id : null,
                invoiceVoucherID: invoiceVoucher && invoiceVoucher.id ? invoiceVoucher.id : null,
                typePayID: typePay.id,
                userID: userInfo.id,
                diID: deliveryID,
                cartItems
            },
            {
                headers:
                    {
                        contentType: 'application/json'
                    }
            });

        localStorage.setItem("cartItems" ,JSON.stringify([]));

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

export const setUserTypePay = (typePay) => dispatch => {
    dispatch({
        type: USER_SET_TYPE_PAY,
        payload: typePay
    })
}
export const setTotalPrice = () => (dispatch, getState) => {
    console.log(getState().cart.totalPrice);

    dispatch({
        type: USER_SET_TOTAL_PRICE,
        payload: getState().cart.totalPrice
    })
}
