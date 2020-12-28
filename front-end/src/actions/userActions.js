import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_ACCOUNT_FAIL,
    USER_REGISTER_ACCOUNT_REQUEST, USER_REGISTER_ACCOUNT_SUCCESS
} from "../constants/userContaints";
import axios from 'axios'
import {CART_SET_CART_ITEMS} from "../constants/cartConstants";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login', {email, password},
            config);
        try{
            const cartItems = (await axios.get(`/api/cart?id=${data.id}`)).data;
            localStorage.setItem("cartItems",JSON.stringify(cartItems))
            dispatch({
                type:CART_SET_CART_ITEMS,
                payload:cartItems
            })

        }catch (e){

        }



        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const logout = () => (dispatch,getState) => {
    const config = {
        headers:{
            contentType:'application/json'
        }
    }

    axios.post('/api/cart/', {
        cartItems:getState().cart.cartItems,
        user: getState().user.userInfo.id
    }, config).then(() => {
        window.location.reload();
    }).catch(e=>alert(e));

    dispatch({
        type: USER_LOGOUT,
        payload: {}
    });

    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
}

export const userRegister = (username, email, password, birthday, gender, phoneNumber) => async dispatch => {
    try {
        dispatch({
            type: USER_REGISTER_ACCOUNT_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/register', {
                name: username,
                email,
                password,
                phoneNumber,
                gender,
                birthday
            },
            config);

        dispatch({
            type: USER_REGISTER_ACCOUNT_SUCCESS,
            payload: data
        });

        dispatch(login(email,password));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_ACCOUNT_FAIL,
            payload: error.response &&
            error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}