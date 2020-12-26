import axios from 'axios';

import {
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_FAIL,
    CART_ADD_ITEM_SUCCESS,
    CART_REDUCE_ITEM,
    CART_REMOVE_ITEM
} from "../constants/cartConstants";
import {USER_LOGIN_FAIL} from "../constants/userContaints";

export const addToCart = (id) => async (dispatch, getState) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


    try {
        dispatch({
            type: CART_ADD_ITEM_REQUEST,
        });

        const {data} = await
            axios.post(`/api/products/addCart`, {id},
                config);
        dispatch({
            type: CART_ADD_ITEM_SUCCESS,
            payload: {
                product: data[0].Id_Good
                , name: data[0].GD_Name,
                image: data[0].Thumbnail_URL,
                price: data[0].GD_Price,
                qty:1
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }catch (error) {
        dispatch({
            type: CART_ADD_ITEM_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }




}

export const reduceToCart = (id) => async (dispatch, getState) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


    try {
        const {data} = await
            axios.post(`/api/products/addCart`, {id},
                config);


        dispatch({
            type: CART_REDUCE_ITEM,
            payload: {
                product: data[0].Id_Good
                , name: data[0].GD_Name,
                image: data[0].Thumbnail_URL,
                price: data[0].GD_Price,
                qty:1
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    }catch (error) {
        dispatch({
            type: CART_ADD_ITEM_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }




}

export const removeFromCart = (id) => (dispatch, getState) => {

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
