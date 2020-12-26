import axios from 'axios';
import {SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS} from "../constants/productConstants";
import db from 'mssql';

export const searchProducts = ({keyword, page = 1, limit = 20}) => async (dispatch) => {
    try {
        dispatch({type: SEARCH_PRODUCTS_REQUEST});

        const URL = `/api/products/search?keyword=${keyword}&page=${page}&limit=${limit}`;
        const {data} = await axios.get( URL );

        dispatch({
            type: SEARCH_PRODUCTS_SUCCESS,
            payload: data
        });


    } catch (error) {
        dispatch({
            type: SEARCH_PRODUCTS_FAIL,
            payload:  error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}


// export const detailProduct = (productID) => async (dispatch) => {
//     try {
//         dispatch({type: PRODUCT_DETAILS_REQUEST});
//
//
//         const {data} = await axios.get(`/api/products/${productID}`);
//         console.log(data);
//         dispatch({
//             type: PRODUCT_DETAILS_SUCCESS,
//             payload: data
//         });
//
//
//     } catch (e) {
//
//         console.log(e);
//
//         dispatch({
//             type: PRODUCT_DETAILS_FAIL,
//             payload: e.message
//         });
//     }
// }
