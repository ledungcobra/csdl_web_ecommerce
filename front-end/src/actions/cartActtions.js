import axios from 'axios';

import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const {data} = await axios.post(`/api/products/addCart`, {id},
        config);
    console.log(data)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.Id_Good
            , name: data.GD_Name,
            image: data.Thumbnail_URL,
            price: data.GD_Price,
            qty
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const removeFromCart = (id) => (dispatch, getState) => {

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
